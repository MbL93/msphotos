import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { GalleryContainer } from "../styles/GalleryLayout"

const GalleryComp = () => {
  const data = useStaticQuery(pageQuery)
  const images = data.allContentfulGalleryImages.nodes.map(
    ({ galleryImage }) => galleryImage
  )

  // `images` is an array of objects with `thumb` and `full`
  return (
    <GalleryContainer>
      <Gallery
        images={images}
        colWidth={33}
        mdColWidth={33}
        rowMargin={33}
        title="Schmandalo"
      />
    </GalleryContainer>
  )
}

const pageQuery = graphql`
  {
    allContentfulGalleryImages(sort: { fields: date, order: DESC }) {
      nodes {
        galleryImage {
          thumb: gatsbyImageData(
            width: 1200
            height: 1200
            placeholder: BLURRED
          )
          full: gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
export default GalleryComp
