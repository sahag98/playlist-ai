import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  playlist: defineTable({
    name: v.string(),
  }),
});
