import React from "react";

import Container from "../components/container";
import Home from "../components/home";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";

export default async function Index(): Promise<JSX.Element> {
  const posts = getAllPosts(["slug", "title", "date", "excerpt"]);

  return (
    <Layout>
      <Container>
        <Home posts={posts} />
      </Container>
    </Layout>
  );
}
