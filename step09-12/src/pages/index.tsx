import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql, Link } from 'gatsby';

export default function home({ data }) {
  const posts = data.allContentfulBlogPost.edges.map((post,i) =>
    <li key={i}><Link to={post.node.slug}>{post.node.title}</Link></li>
  );
  return (
    <div>
      <ul>
          {posts}
      </ul>
    </div>
  )
}

export const query = graphql`
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
`
