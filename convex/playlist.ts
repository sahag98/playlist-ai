import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createPlaylist = mutation({
  args: {
    name: v.string(),
    link: v.string(),
  },
  handler: async (ctx, { name, link }) => {
    // const identity = await ctx.auth.getUserIdentity();
    // console.log("identity: ", identity);

    // if (identity === null) {
    //   return;
    // }
    await ctx.db.insert("playlist", {
      name,
      link,
    });
  },
});

export const deleteAllPlaylists = mutation({
  args: {},
  handler: async (ctx) => {
    // const identity = await ctx.auth.getUserIdentity();
    // console.log("identity: ", identity);
    // if (identity === null) {
    //   return;
    // }

    const playlists = await ctx.db.query("playlist").collect();

    console.log("entries: ", playlists);

    await Promise.all(
      playlists.map(async (playlist) => {
        return await ctx.db.delete(playlist._id);
      })
    );
  },
});

export const getAllPlaylists = query({
  // args: {
  //   chatId: v.id("consultations"),
  // },
  handler: async (ctx) => {
    const entries = await ctx.db.query("playlist").collect();

    return entries;
  },
});
