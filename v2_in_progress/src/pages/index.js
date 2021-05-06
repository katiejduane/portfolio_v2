import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import portrait from "../assets/images/kd-bw.jpg"

// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

// TO DO: figure out image issue and add bio pic

const IndexPage = () => (
  <Layout>
    <Content
      seo="Home"
      title="Hello!"
      image={portrait}
      alt="Black and white photo of me"
      p1="My name is Katie and I'm a web developer, writer, artist, and former high school art teacher.
      I'm curious, driven, and love to collaborate. My background in the arts and writing has prepared 
      me with a keen eye, attention to detail, and creative problem-solving skills."
      p2="Currently, I work as a Frontend Developer at PLS 3rd Learning in Buffalo, NY. 
      When I'm not writing code, it's very likely that I'm writing essays, painting, 
      reading (usually 18 books at once), or spending time outside. I'm also a registered 
      yoga teacher and love to travel."
    />
  </Layout>
)

export default IndexPage
