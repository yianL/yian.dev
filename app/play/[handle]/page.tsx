import Script from "next/script";
import React from "react";

import UnityRenderer from "./components/unityRenderer";
import { GameBundles } from "../gameCatalog";

interface Params {
  handle: string;
}

type PageProps = {
  params: Params;
};

export const dynamicParams = false;

export default function Index({ params }: PageProps): JSX.Element {
  const { handle } = params;

  return (
    <>
      <Script
        src="https://play.yian.dev/WebGL.loader.js"
        strategy="beforeInteractive"
      />
      <UnityRenderer handle={handle} />
    </>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(GameBundles).map((handle) => ({ handle }));
}
