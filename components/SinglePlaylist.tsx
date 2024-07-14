"use client";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";

const SinglePlaylist = (props: {
  preloadedSinglePlaylist: Preloaded<typeof api.playlist.getSinglePlaylist>;
}) => {
  const playlist = usePreloadedQuery(props.preloadedSinglePlaylist);

  return (
    <main className="flex h-screen relative gap-4 w-full lg:px-44 md:px-24 px-4 flex-col mt-24">
      <h1 className="font-bold text-3xl">{playlist?.name}</h1>
    </main>
  );
};

export default SinglePlaylist;
