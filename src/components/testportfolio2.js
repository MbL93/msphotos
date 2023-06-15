import { graphql, useStaticQuery } from "gatsby"
import Lightroom from "react-lightbox-gallery"
import React from "react"

const images2 = [
  {
    src: "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    desc: "Person wearing shoes",
    sub: "Gift Habeshaw",
  },
  {
    src: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    desc: "Blonde woman wearing sunglasses smiling at the camera ",
    sub: "Dmitriy Frantsev",
  },
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 1,
    height: 2,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 12,
    height: 12,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
]

const settings = {
  columnCount: {
    default: 2,
    mobile: 3,
    tab: 4,
  },
  mode: "dark",
}
const Testportfolio2 = () => {
  const data = useStaticQuery(pageQuery)
  const images = data.allContentfulGalleryImages.nodes.map(
    ({ galleryImage }) => {
      console.log(galleryImage.full.images.fallback.src)
      return {
        src: galleryImage.full.images.fallback.src,
      }
    }
  )
  return (
    <div>
      <Lightroom images={images} settings={settings} />
    </div>
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
export default Testportfolio2
