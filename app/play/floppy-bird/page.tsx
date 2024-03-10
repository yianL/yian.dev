"use client";

import Script from "next/script";
import React, { useEffect } from "react";

declare global {
  interface Window {
    createUnityInstance: (
      canvas: Element | null,
      options: {
        dataUrl: string;
        frameworkUrl: string;
        codeUrl: string;
        streamingAssetsUrl: string;
        companyName: string;
        productName: string;
        productVersion: string;
      }
    ) => void;
  }
}

export default function Index(): JSX.Element {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const canvas = document.getElementById(
        "unity-canvas"
      ) as HTMLCanvasElement;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.position = "fixed";
    }

    console.log("Creating Unity instance");

    window.createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "https://play.yian.dev/floppy-bird/Build/FlappyDot-WebGL.data",
      frameworkUrl:
        "https://play.yian.dev/floppy-bird/Build/FlappyDot-WebGL.framework.js",
      codeUrl: "https://play.yian.dev/floppy-bird/Build/FlappyDot-WebGL.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "play.yian.dev",
      productName: "FloppyBird",
      productVersion: "1.0",
    });
  }, []);

  return (
    <>
      <canvas
        id="unity-canvas"
        width="500"
        height="800"
        tabIndex={-1}
        className="w-[500px] h-[800px] bg-black"
      />
      <Script
        src="https://play.yian.dev/floppy-bird/Build/FlappyDot-WebGL.loader.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
