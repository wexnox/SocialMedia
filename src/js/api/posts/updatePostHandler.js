import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "../headers.js"
const action = "/posts";



export async function updatePostHandler(event, post, id) {
  event.preventDefault();

  const url = `${API_SOCIAL_URL}${action}/${id}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers('application/json'),
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        tags: post.tags,
        media: post.media
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error updating post details:', error);
  }
};