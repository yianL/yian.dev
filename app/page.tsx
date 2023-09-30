import Head from "next/head";
import React from "react";

import Container from "../components/container";
import Home from "../components/home";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";

export default function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
}
