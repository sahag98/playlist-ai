import SinglePlaylist from "@/components/SinglePlaylist";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import { useQuery } from "convex/react";

export default async function SinglePlaylistPage({
  params,
}: {
  params: { id: string };
}) {
  console.log("params: ", params);
  const preloadedPlaylist = await preloadQuery(api.playlist.getSinglePlaylist, {
    playlist_id: params.id,
  });
  // const playlist = useQuery(api.playlist.getSinglePlaylist, {
  //   playlist_id: params.id,
  // });

  console.log(preloadedPlaylist);
  return (
    <div>
      <SinglePlaylist preloadedSinglePlaylist={preloadedPlaylist} />
    </div>
  );
}
