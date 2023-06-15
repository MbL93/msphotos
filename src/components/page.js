import React, { useRef } from "react";
import { PageLayout } from "../styles/PageLayout";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./header";
import Footer from "./footer";
import Seo from "./Seo";
import ImageHeader from "./ImageHeader";
//import useIsInViewport from "../hooks/useIsInViewport"
import { Container } from "../styles/PageLayout";
//import { ImageHeaderWrapper } from "../styles/ImageHeaderLayout"
import {
  //Link,
  //Button,
  Element,
  //Events,
  animateScroll as scroll,
  //scrollSpy,
  //scroller,
} from "react-scroll";

function executeScroll() {
  scroll.scrollMore(100);
}

const Page = ({
  children,
  imageHeaderSource,
  headerIsVisible,
  visibleNavbar,
}) => {
  //// diese drei waren einkommentiert
  // const imageHeaderRef = useRef(null)
  // const containerStartRef = useRef(null)
  // const isInViewport1 = useIsInViewport(imageHeaderRef)

  // containerStartRef.current.scrollIntoView()
  // if (visibleHeader){
  //   const isInViewport1 = useIsInViewport(imageHeaderRef)

  // if(visibleNavbar){
  //   const navbarIsVisible = !isInViewport1
  // }

  // das war einkommentiert
  //const navbarIsVisible = !isInViewport1

  const navbarIsVisible = true;
  //
  return (
    <>
      <Seo />
      <GlobalStyles />

      {visibleNavbar ? <Header navbarIsVisible={navbarIsVisible} /> : null}

      <PageLayout>
        {headerIsVisible ? (
          <ImageHeader
            imageTitle={
              "Wir gestalten dir deine schönste Erinnerung - auf ewig!"
            }
          />
        ) : (
          <div style={{ display: "none" }} onWheel={executeScroll}>
            <ImageHeader />
          </div>
        )}
        <Element id="myScrollToElement" name="myScrollToElement">
          <Container column justifyContent="space-between">
            {children}
          </Container>
        </Element>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Page;
