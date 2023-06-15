import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
//import { StyledButton } from "../styles/ButtonLayout"
import { Headline, Title, Subtitle } from "../styles/Typography"
import { Divider } from "@mui/material"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PageChapter } from "./PageChapter"
import {
  StoryGalleryContainer,
  // StoryGalleryImage,
  StoryGalleryItem,
} from "../styles/StoryGalleryLayout"
import slugify from "slugify"

const StoryGallery = ({ stories, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "140px",
      }}
    >
      <div style={{ width: "100%" }}>
        <Divider></Divider>
      </div>
      <div style={{ padding: "60px", paddingTop: "19px" }}>
        <Headline>{title}</Headline>
        <Divider></Divider>
      </div>
      <div
        id="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div id="item1">
          <StoryGalleryContainer>
            {stories.map(story => {
              const { id, title, leadimage } = story
              const pathToImage = getImage(leadimage)
              const slug = "story/" + slugify(title, { lower: true })
              return (
                <>
                  <StoryGalleryItem
                    style={{
                      paddingTop: "10px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        key={id}
                        alt={title}
                        style={{
                          overflow: "hidden",
                          height: "85%",
                        }}
                      />
                      <h4
                        style={{
                          fontFamily: "Caveat Brush",
                          textAlign: "center",
                          marginTop: "10px",
                          fontSize: "16px",
                        }}
                      >
                        {title}
                      </h4>
                    </Link>
                  </StoryGalleryItem>
                  {/* <StoryGalleryItem>
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        style={{ overflow: "hidden", height: "85%" }}
                      />
                      <h5 style={{ "text-align": "center" }}>{title}</h5>
                    </Link>
                  </StoryGalleryItem>
                  <StoryGalleryItem>
                    <Link
                      key={id}
                      to={`/${slug}`}
                      style={{ overflow: "hidden" }}
                    >
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        style={{
                          overflow: "hidden",
                          height: "85%",
                        }}
                      />
                      <h5 style={{ "text-align": "center" }}>{title}</h5>
                    </Link>
                  </StoryGalleryItem> */}
                </>
              )
            })}
          </StoryGalleryContainer>
        </div>
      </div>
    </div>
  )
}

export default StoryGallery
