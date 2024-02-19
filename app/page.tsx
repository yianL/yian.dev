import Head from "next/head";
import React from "react";

import Container from "../components/container";
import Home from "../components/home";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default async function Index(): Promise<JSX.Element> {
  const posts = await getAllPosts(["slug", "title", "date", "excerpt"]);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Home posts={posts} />
        </Container>
      </Layout>
    </>
  );
}
