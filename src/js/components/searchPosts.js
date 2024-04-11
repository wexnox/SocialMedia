export function searchPosts(posts, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return posts.filter(post => {
        const title = post.title ? post.title.toLowerCase() : '';
        const body = post.body ? post.body.toLowerCase() : '';
        const authorName = post.author && post.author.name ? post.author.name.toLowerCase() : '';

        return title.includes(searchTerm) || body.includes(searchTerm) || authorName.includes(searchTerm);
    });
}
