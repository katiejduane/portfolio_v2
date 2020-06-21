import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"

// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

// TO DO: figure out image issue and add bio pic

const IndexPage = () => (
  <Layout>
    <Content
      seo="Home"
      title="Hello!"
      // subtitle="A little bit about me..."
      p1="My name is Katie and I am a versatile, driven, and insatiably curious developer with a 
      proclivity toward UI Development and Frontend Engineering. My background in arts and writing 
      has prepared me with a keen eye, attention to detail, and innovative problem-solving skills. 
      I love collaborating, communicating, and writing code that is clean, efficient, and accessible."
      p2="Currently, I work as a Software Developer in Test at Ware2Go out of Atlanta, GA. I write 
      end-to-end UI and API tests in JavaScript, and what I love most about my job are the daily 
      opportunities to create or augment solutions to ensure that our test code is as stable, efficient, 
      clean, and DRY as possible. I look forward to bringing everything I've learned in testing into
      a developer role."
      p3="When I'm not writing code, it's very likely that I'm writing essays or poetry, painting, 
      reading (usually 18 books at once), or spending time outside. I'm also a registered yoga teacher 
      and love to travel."
    />
  </Layout>
)

export default IndexPage
