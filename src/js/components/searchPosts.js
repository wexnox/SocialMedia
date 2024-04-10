export function searchPosts(posts, searchTerm) {
    return posts.filter(post => post.title.toLowerCase().includes(searchTerm) || post.body.toLowerCase().includes(searchTerm));
}