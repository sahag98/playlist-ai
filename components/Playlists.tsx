"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  useConvexAuth,
  Preloaded,
  useMutation,
  useQuery,
  usePreloadedQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import { CreatePlaylistDialog } from "./dialogs/create-playlist";

const Playlists = (props: {
  preloadedPlaylists: Preloaded<typeof api.playlist.getAllPlaylists>;
}) => {
  const createPlaylist = useMutation(api.playlist.createPlaylist);
  const deleteAllPlaylists = useMutation(api.playlist.deleteAllPlaylists);
  //   const allPlaylists = useQuery(api.playlist.getAllPlaylists);

  const allPlaylists = usePreloadedQuery(props.preloadedPlaylists);
  //   const preloadedTasks = await preloadQuery(api.playlist.getAllPlaylists);
  return (
    <main className="flex h-screen relative gap-4 flex-col">
      {/* <h1>Playlists</h1>
      <CreatePlaylistDialog /> */}
      <section className="flex  w-full items-center justify-between">
        <h1 className="font-bold text-3xl">Playlist</h1>
        {allPlaylists.length !== 0 && (
          <Button
            onClick={() => {
              createPlaylist({ name: "hey", link: "linktest" });
            }}
          >
            Create
          </Button>
        )}
      </section>
      {/* <Button
        onClick={() => {
          deleteAllPlaylists();
        }}
      >
        Delete All

        
      </Button> */}

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <CreatePlaylistDialog />
        </div>
      </div>
    </main>
  );
};

export default Playlists;
