"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const PlaylistsPage = () => {
  const createPlaylist = useMutation(api.playlist.createPlaylist);
  const allPlaylists = useQuery(api.playlist.getAllPlaylists);

  return (
    <main className="flex min-h-screen flex-col items-center mt-24">
      <h1>Create a playlist</h1>
      <Button
        onClick={() => {
          createPlaylist({ name: "hey", link: "linktest" });
        }}
      >
        Create
      </Button>

      {allPlaylists?.map((playlist) => (
        <div key={playlist._id}>
          <h2>{playlist.name}</h2>
          <p>{playlist.link}</p>
        </div>
      ))}
    </main>
  );
};

export default PlaylistsPage;
