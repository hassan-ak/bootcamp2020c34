import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({pageContext}) => {
    console.log(pageContext)
  return (
    <div>
            <h1>{pageContext.title}</h1>
            <div>{documentToReactComponents(JSON.parse(pageContext.body.raw))}</div>
            <small>{pageContext.publishDate}</small>
    </div>
  )
} 