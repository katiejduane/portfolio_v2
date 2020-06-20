import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"

// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

const IndexPage = () => (
  <Layout>
    <Content
      seo="Home"
      title="Hello!"
      // subtitle="A little bit about me..."
      p1="My name is Katie and I am a web developer, writer, and yoga teacher. I see writing 
      code as similar to writing a good poem: it should be clear, efficient, beautiful, and accessible. 
      I'm also and a devoted lover of coffee, books, trees, clouds, exploring, and outer space."
      p2="Currently, I work as a Software Developer in Test at Ware2Go out of Atlanta, GA.
      I love coming up with creative and efficient solutions, learning new technologies,
      DRYing up my code, and collaborating with my colleagues. UI and API testing has taught
      me a lot about what a structurally sound and testable application looks like, and I'd
      love to bring this knowledge and experience into a developer role."
      p3="My background is in education and the fine arts, and I taught art in Oregon, Ecuador,
      and New York before realizing I desired a more technical career. In March of 2019, I completed 
      a four month coding program at DigitalCrafts in Atlanta. When I'm not writing 
      code, I'm probably busy writing essays, reading, or spending time outside."
    />
  </Layout>
)

export default IndexPage
