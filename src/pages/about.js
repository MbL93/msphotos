import React from "react"
import Page from "../components/Page"
import IntroductionAll, {
  IntroductionMarc,
  IntroductionStefan,
} from "../components/Introduction"
const About = () => {
  return (
    <Page
      imageHeaderSource={"source"}
      headerIsVisible={true}
      visibleNavbar={true}
    >
      <IntroductionAll />
      <IntroductionMarc />
      <IntroductionStefan />
    </Page>
  )
}

export default About
