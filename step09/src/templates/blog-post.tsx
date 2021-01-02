import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({pageContext}) => {
  return (
    <div>
            <h1>{pageContext.title}</h1>
            <p>{documentToReactComponents(JSON.parse(pageContext.content.raw))}</p>
            <small>{pageContext.publicationData}</small>
    </div>
  )
}