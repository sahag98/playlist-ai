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

export const getAllPlaylists = query({
  // args: {
  //   chatId: v.id("consultations"),
  // },
  handler: async (ctx) => {
    const entries = await ctx.db.query("playlist").collect();

    return entries;
  },
});
