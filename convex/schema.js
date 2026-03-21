import { defineSchema , defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email : v.string(),
        tokenIdentifier: v.string(),
        imageUrl : v.optional(v.string()),


        // Subscription plan (managed by Clerk billing)
       plan: v.union(v.literal("free"), v.literal("pro")),

       // Usage tracking for plan limits
       projectsUsed: v.number(), // Current project count
       exportsThisMonth: v.number(), // Monthly export limit tracking

      // Activity timestamps
      createdAt: v.number(),
      lastActiveAt: v.number(),
    })
    .index("by_token", ["tokenIdentifier"])
     // Primary auth lookup
    .index("by_email", ["email"]) // Email lookups
    .searchIndex("search_name", { searchField: "name" }) // User search
    .searchIndex("search_email", { searchField: "email" }),



    projects : defineTable({
        title : v.string(),
        userId : v.id("users"),  // its a foreign key which belongs to the users table

        // fabric.js canvasState
        canvasState : v.any(),
        width : v.number(),
        height : v.number(),

        // IMAGE PIPELINE TRACKS IMAGE TRANSFORMATION

        originalImage : v.optional(v.string()),
        currentImage : v.optional(v.string()),
        thumbnailUrl : v.optional(v.string()),

        // IMAGE KIT TRANSFORMATION STATE
        
        activeTransformation : v.optional(v.string()),  // image kit url params 
        backgroundRemoved : v.optional(v.boolean()),


        // ORGANIZATION

        folderId : v.optional(v.id("folders")),


        //TIME STAMPS

        createdAt : v.number(),
        updatedAt : v.number(),
    }).index("by_user",["userId"])
    .index("by_user_update",["userId" ,"updatedAt"])
    .index("by_folder" ,["folderId"]),


    folders : defineTable({
        name : v.string(),
        userId : v.id("users"),
        createdAt : v.number(),
    }).index("by_user",["userId"]),
});



