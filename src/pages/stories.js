import React from "react"
import Page from "../components/Page"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import StoryGallery from "../components/storyGallery"
const Stories = () => {
  const data = useStaticQuery(weddingQuery)

  const stories = data.allContentfulStory.nodes

  return (
    <Page
      imageHeaderSource={"source"}
      headerIsVisible={true}
      visibleNavbar={true}
    >
      <StoryGallery stories={stories} title="jonny" />
    </Page>
  )
}

const weddingQuery = graphql`
  {
    allContentfulStory {
      nodes {
        id
        leadimage {
          gatsbyImageData
        }
        title
      }
    }
  }
`
export default Stories
