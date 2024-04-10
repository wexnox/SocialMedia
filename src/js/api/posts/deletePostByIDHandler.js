import { API_SOCIAL_URL } from "../constants.mjs";
import { headers } from "@/js/api/headers.js";
const action = "/posts";


export async function deletePostDetailsHandler(id) {
  const url = `${API_SOCIAL_URL}${action}/${id}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers('application/json')
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setTimeout(() => {
      window.location.href = '/pages/posts';
    }, 5000); // 5000ms delay, adjust as needed


  } catch (error) {
    console.error('Error deleting post:', error);
  }
};



