import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({data}) => {
    console.log(documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[0].node.content.raw)));
    return (
        <div>
            <div>
                <h1>{data.allContentfulBlogPost.edges[0].node.title}</h1>
                <p>{documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[0].node.content.raw))}</p>
                <small>{data.allContentfulBlogPost.edges[0].node.publicationData}</small>
            </div>
            <hr/>
            <div>
                <h1>{data.allContentfulBlogPost.edges[1].node.title}</h1>
                <p>{documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[1].node.content.raw))}</p>
                <small>{data.allContentfulBlogPost.edges[1].node.publicationData}</small>
            </div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            title
            content {
              raw
            }
            publicationData
          }
        }
      }
  }
`
