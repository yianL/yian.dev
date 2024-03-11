import Link from "next/link";
import React from "react";

import { GameBundles } from "./gameCatalog";

export default async function Index(): Promise<JSX.Element> {
  return (
    <>
      <h1 className="pt-20 text-center">Ready, Set, PLAY</h1>
      <ul className="mt-10 text-center text-xl">
        {Object.keys(GameBundles).map((handle) => (
          <li key={handle}>
            <Link href={`/play/${handle}`} target="_blank">
              {GameBundles[handle].name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
