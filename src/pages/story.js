import React from "react"
import { Story } from "../modules/story"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <Story path="/story/:title" />
    </MyRouter>
  )
}

export default Router
