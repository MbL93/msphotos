import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "@reach/router"
import slugify from "slugify"
export const Story = ({ title }) => {
  const [person, setPerson] = useState()
  const data = useStaticQuery(pageQuery)
  const images = data.allContentfulStory.nodes

  useEffect(() => {
    console.log(slugify(title, { lower: true }))
    images.forEach(image => {
      console.log(image.title)
      console.log(title)
      if (title == slugify(image.title, { lower: true })) {
        setPerson(image.title)
      }
    })
  }, [images])
  //     console.log(images)
  //     for (const story in images) {
  //       console.log(images[0].title)
  //       console.log(title)
  //       if (title == images[0].title) {
  //         setPerson(title)
  //       }
  //     }
  //   }, [])
  return (
    <div>
      <pre>{person}</pre>
    </div>
  )
}
const pageQuery = graphql`
  query ProductListingByAttributeQuery($title: String) {
    allContentfulStory(filter: { title: { eq: $title } }) {
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
