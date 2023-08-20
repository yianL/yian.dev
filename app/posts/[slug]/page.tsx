import Container from "../../../components/container";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import PostBody from "../../../components/post-body";
import PostHeader from "../../../components/post-header";
import PostType from "../../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";

export const dynamicParams = false;

interface Params {
  slug: string;
}

export default async function Page({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const post = await getPost(params);
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(params): Promise<PostType> {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    ...post,
    content,
  } as PostType;
}
