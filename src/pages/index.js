import React from "react"
import Page from "../components/Page"
import IntroductionAll from "../components/Introduction"
import StoryGallery from "../components/storyGallery"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(query)
  const stories = data.allContentfulStory.nodes
  return (
    <>
      <Page
        imageHeaderSource={"source"}
        headerIsVisible={true}
        visibleNavbar={true}
      >
        <IntroductionAll />
        <StoryGallery stories={stories} title="ERINNERUNGEN" />
      </Page>
    </>
  )
}
const query = graphql`
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

export default Home
