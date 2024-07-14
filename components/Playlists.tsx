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
import { Music2Icon, Music3Icon, Music4Icon } from "lucide-react";
import Link from "next/link";

const Playlists = (props: {
  preloadedPlaylists: Preloaded<typeof api.playlist.getAllPlaylists>;
}) => {
  const deleteAllPlaylists = useMutation(api.playlist.deleteAllPlaylists);
  //   const allPlaylists = useQuery(api.playlist.getAllPlaylists);

  const allPlaylists = usePreloadedQuery(props.preloadedPlaylists);
  //   const preloadedTasks = await preloadQuery(api.playlist.getAllPlaylists);
  return (
    <main className="flex h-screen relative gap-4 w-full lg:px-44 md:px-24 px-4 flex-col mt-24">
      {/* <h1>Playlists</h1>
      <CreatePlaylistDialog /> */}
      <section className="flex  w-full items-center justify-between">
        <h1 className="font-bold text-3xl">Your Playlists</h1>

        {allPlaylists.length !== 0 && <CreatePlaylistDialog />}
      </section>
      {/* <Button
        onClick={() => {
          deleteAllPlaylists();
        }}
      >
        Delete All

        
      </Button> */}
      {allPlaylists.length == 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no Playlists
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create a playlist and share it with your friends!
            </p>
            <CreatePlaylistDialog />
          </div>
        </div>
      ) : (
        <div className="flex rounded-lg">
          <div className="grid w-full lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-1">
            {allPlaylists.map((playlist) => (
              <Link
                href={`/playlist/${playlist._id}`}
                className="bg-primary cursor-pointer hover:scale-105 transition-all w-full gap-3 flex flex-col justify-between aspect-square rounded-lg p-5"
                key={playlist._id}
              >
                <Music4Icon
                  size={50}
                  className="w-full flex-1 rounded-md bg-gray-600"
                  color="white"
                />
                <p className="font-medium text-lg text-white">
                  {playlist.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Playlists;
