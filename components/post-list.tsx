import Link from "next/link";

import DateFormatter from "./date-formatter";
import Post from "../interfaces/post";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props): JSX.Element => {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post) => (
        <div key={post.slug}>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <div className="mb-4 text-gray-700">{post.excerpt}</div>
          <div className="mb-4 text-gray-500">
            <DateFormatter dateString={post.date} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
