import { v } from "convex/values";
import { action, internalAction, mutation, query } from "./_generated/server";
import { api } from "./_generated/api";
import * as cheerio from "cheerio";
export const addSongToPlaylist = mutation({
  args: {
    title: v.string(),
    link: v.string(),
    playlist_id: v.id("playlist"),
  },
  handler: async (ctx, { link, playlist_id, title }) => {
    // const identity = await ctx.auth.getUserIdentity();
    // console.log("identity: ", identity);

    // if (identity === null) {
    //   return;
    // }

    await ctx.db.insert("media", {
      title,
      link,
      playlist_id,
    });
  },
});

export const addTitleToSong = action({
  args: {
    link: v.string(),
    playlist_id: v.id("playlist"),
  },
  handler: async (ctx, args) => {
    const response = await fetch(args.link);

    const htmlString = await response.text();
    //   console.log("string: ", htmlString);

    const $ = cheerio.load(htmlString);
    const title = $("title").text();

    await ctx.runMutation(api.media.addSongToPlaylist, {
      title,
      link: args.link,
      playlist_id: args.playlist_id,
    });
  },
});

export const getSinglePlaylist = query({
  args: {
    playlist_id: v.string(),
  },
  handler: async (ctx, args) => {
    const singlePlaylist = await ctx.db
      .query("playlist")
      .filter((q) => q.eq(q.field("_id"), args.playlist_id))
      .first();

    return singlePlaylist;
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

export const getAllSongs = query({
  args: {
    playlist_id: v.id("playlist"),
  },
  handler: async (ctx, args) => {
    const allSongs = await ctx.db
      .query("media")
      .filter((q) => q.eq(q.field("playlist_id"), args.playlist_id))
      .collect();

    return allSongs;
  },
});
