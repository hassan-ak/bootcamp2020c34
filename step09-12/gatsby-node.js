exports.createPages = async function ({ graphql, actions }) {

    const query = await graphql(`
    query {
        allContentfulBlogPost {
          edges {
            node {
              title
              body {
                raw
              }
              publishDate
              slug
            }
          }
        }
      }
    `);

    const posts = query.data.allContentfulBlogPost.edges;

    posts.map((post) => {
        actions.createPage({
            path: post.node.slug,
            component: require.resolve(`./src/templates/blog-post.tsx`),
            context: post.node,
        });
    })
} 