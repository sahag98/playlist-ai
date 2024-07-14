import SinglePlaylist from "@/components/SinglePlaylist";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
export default async function SinglePlaylistPage({
  params,
}: {
  params: { id: Id<"playlist"> };
}) {
  console.log("params: ", params);
  const preloadedSinglePlaylist = await preloadQuery(
    api.playlist.getSinglePlaylist,
    {
      playlist_id: params.id,
    }
  );

  const preloadedMedia = await preloadQuery(api.media.getAllSongs, {
    playlist_id: params.id,
  });

  return (
    <div>
      <SinglePlaylist
        preloadedMedia={preloadedMedia}
        preloadedSinglePlaylist={preloadedSinglePlaylist}
      />
    </div>
  );
}
