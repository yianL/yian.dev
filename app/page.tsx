import Head from "next/head";
import React from "react";

import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import PostList from "../components/post-list";
import { getAllPosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index(): JSX.Element {
  const allPostsData = allPosts();

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <PostList posts={allPostsData} />
        </Container>
      </Layout>
    </>
  );
}

const allPosts = () =>
  getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);
