import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function home({ data }) {
  console.log(documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[2].node.body.raw)))
  return (
    <div>
      <div>{data.allContentfulBlogPost.edges[2].node.title}</div>
      <div>{documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[2].node.body.raw))}</div>
      <div>{data.allContentfulBlogPost.edges[2].node.publishDate}</div>
      <br />
      <hr />
      <div>{data.allContentfulBlogPost.edges[1].node.title}</div>
      <div>{documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[1].node.body.raw))}</div>
      <div>{data.allContentfulBlogPost.edges[1].node.publishDate}</div>
      <br />
      <hr />
      <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
      <div>{documentToReactComponents(JSON.parse(data.allContentfulBlogPost.edges[0].node.body.raw))}</div>
      <div>{data.allContentfulBlogPost.edges[0].node.publishDate}</div>
      <br />
      <hr />
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
        }
      }
    }
  }
`
