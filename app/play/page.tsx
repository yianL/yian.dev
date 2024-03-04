import React from "react";

import Container from "../../components/container";
import Layout from "../../components/layout";
import { Metadata } from "next/types";
import { Suffix } from "../../lib/constants";

export const metadata: Metadata = {
  title: `Playground${Suffix}`,
};

export default async function Index(): Promise<JSX.Element> {
  // TODO: Get the list of games from an API
  // const games = getAllGamesMetadata();

  return (
    <Layout>
      <Container>
        <h1 className="pt-20 text-center">Ready, Set, PLAY</h1>
        <ul className="mt-10 text-center text-xl">
          <li>
            <a target="_blank" href="https://play.yian.dev/floppy-bird">
              Floppy Bird
            </a>
          </li>
          <li>
            <a target="_blank" href="https://play.yian.dev/pop-le-lock">
              Pop Le Lock
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  );
}
