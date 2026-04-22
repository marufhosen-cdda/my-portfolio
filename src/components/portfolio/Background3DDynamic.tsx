"use client";

import dynamic from "next/dynamic";

export const Background3DDynamic = dynamic(
  () => import("./Background3D").then((mod) => mod.Background3D),
  {
    ssr: false,
    loading: () => null,
  }
);
