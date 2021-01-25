import React from 'react';
import { graphql } from 'gatsby';

export default function home({data}) {
  console.log(data)
  return (
    <div>
      <div>{data.allContentfulBlogPost.nodes[2].title}</div>
      <div>{data.allContentfulBlogPost.nodes[2].body.raw}</div>
      <div>{data.allContentfulBlogPost.nodes[2].publishDate}</div>
      <br/>
      <hr/>
      <div>{data.allContentfulBlogPost.nodes[1].title}</div>
      <div>{data.allContentfulBlogPost.nodes[1].body.raw}</div>
      <div>{data.allContentfulBlogPost.nodes[1].publishDate}</div>
      <br/>
      <hr/>
      <div>{data.allContentfulBlogPost.nodes[0].title}</div>
      <div>{data.allContentfulBlogPost.nodes[0].body.raw}</div>
      <div>{data.allContentfulBlogPost.nodes[0].publishDate}</div>
      <br/>
      <hr/>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        title
        body {
          raw
        }
        publishDate
      }
    }
  }
`
