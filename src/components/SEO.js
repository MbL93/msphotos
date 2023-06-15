import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
  const metaDescription = "STARC Photography"
  return (
    <Helmet
      htmlAttributes={{ lang: "de" }}
      title={`STARC Photography`}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}

export default Seo
