import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  playlist: defineTable({
    name: v.string(),
  }),
  media: defineTable({
    title: v.string(),
    link: v.string(),
    playlist_id: v.id("playlist"),
  }),
});
