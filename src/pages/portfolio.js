import React from "react"
import Page from "../components/Page"
import { Headline } from "../styles/Typography"
import GalleryComp from "../components/GalleryComp"

const Portfolio = () => {
  return (
    <Page  imageHeaderSource={"source"} headerIsVisible={false} visibleNavbar={true}>
      <Headline>Hi from Portfolio!</Headline>
      <GalleryComp />
    </Page>
  )
}

export default Portfolio
