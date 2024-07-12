import { Button } from "@/components/ui/button";
import React from "react";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import Playlists from "@/components/Playlists";

const PlaylistsPage = async () => {
  const preloadedPlaylists = await preloadQuery(api.playlist.getAllPlaylists);
  return (
    <main className="">
      <Playlists preloadedPlaylists={preloadedPlaylists} />
    </main>
  );
};

export default PlaylistsPage;
