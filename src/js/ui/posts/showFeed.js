import { fetchAllPostsHandler } from "@/js/api/posts/fetchAllPostsHandler.js";

export function showFeed(){

  fetchAllPostsHandler()
}