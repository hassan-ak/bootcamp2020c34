import React from 'react';
import { graphql } from 'gatsby';

export default ({data}) => {
    console.log(data);
    return (
        <div>
            <div>
                <h1>{data.allContentfulBlogPost.edges[0].node.firstBlog}</h1>
                <p>{data.allContentfulBlogPost.edges[0].node.body.raw}</p>
                <small>{data.allContentfulBlogPost.edges[0].node.publishedDate}</small>
            </div>
            <hr/>
            <div>
                <h1>{data.allContentfulBlogPost.edges[1].node.firstBlog}</h1>
                <p>{data.allContentfulBlogPost.edges[1].node.body.raw}</p>
                <small>{data.allContentfulBlogPost.edges[1].node.publishedDate}</small>
            </div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            firstBlog
            publishedDate
            body {
              raw
            }
          }
        }
      }
  }
`
