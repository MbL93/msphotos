import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Headline, Title, Subtitle, Paragraph } from "../styles/Typography"
import { Divider } from "@mui/material"
export function PageChapter({
  headline,
  subTitle,
  subSubTitle,
  subSubSubTitle,
  paragraph,
  subParagraph,
  imagePath,
  imagePosition,
  alt,
}) {
  const imagePaths = imagePath
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
        <Headline>{headline}</Headline>
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
        {imagePosition === "left" ? (
          <>
            <div id="item1" style={{ flex: "0 0 48%", alignSelf: "flexStart" }}>
              <StaticImage
                src="../assets/images/stefan.jpg"
                alt={alt}
                placeholder="tracedSVG"
                layout="constrained"
                as="div"
              />
            </div>
            <div
              id="item2"
              style={{
                flex: "0 0 48%",
              }}
            >
              <div
                style={{
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                <Title>{subTitle}</Title>
              </div>
              <div
                style={{
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                <Subtitle>
                  {subSubTitle}
                  <Divider> {subSubSubTitle}</Divider>
                </Subtitle>
              </div>
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <Paragraph>{paragraph}</Paragraph>
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                {subParagraph}
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              id="item2"
              style={{
                flex: "0 0 48%",
              }}
            >
              <div
                style={{
                  marginBottom: "5px",
                  textAlign: "center",
                }}
              >
                <Title>{subTitle}</Title>
              </div>
              <div
                style={{
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                <Subtitle>
                  {subSubTitle}
                  <Divider> {subSubSubTitle}</Divider>
                </Subtitle>
              </div>
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <Paragraph>{paragraph}</Paragraph>
              </div>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                {subParagraph}
              </div>
            </div>
            <div id="item1" style={{ flex: "0 0 48%", alignSelf: "flexStart" }}>
              <StaticImage
                src="../assets/images/marc.jpg"
                alt={alt}
                placeholder="tracedSVG"
                layout="constrained"
                as="div"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
