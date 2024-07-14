"use client";
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";
import { Button } from "./ui/button";
import { scraperAction } from "@/actions/scraper-action";
import { AddSongDialog } from "./dialogs/add-song";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const SinglePlaylist = (props: {
  preloadedSinglePlaylist: Preloaded<typeof api.playlist.getSinglePlaylist>;
  preloadedMedia: Preloaded<typeof api.media.getAllSongs>;
}) => {
  const playlist = usePreloadedQuery(props.preloadedSinglePlaylist);
  const songs = usePreloadedQuery(props.preloadedMedia);

  if (!playlist) {
    throw new Error("You're not supposed to be here");
  }

  return (
    <main className="flex h-screen relative gap-4 w-full lg:px-44 md:px-24 px-4 flex-col mt-24">
      <section className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{playlist?.name}</h1>
        {songs.length !== 0 && <AddSongDialog playlist_id={playlist?._id} />}
      </section>
      {songs.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no media added.
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add any type of media such as songs and videos.
            </p>
            <AddSongDialog playlist_id={playlist?._id} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-lg border border-dashed shadow-sm">
          {songs.map((song) => (
            <Link
              target="_blank"
              href={song.link}
              className={"flex border-b p-3 items-center justify-between"}
              key={song._id}
            >
              <p className="font-medium">{song.title}</p>

              <ExternalLink size={20} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default SinglePlaylist;
