import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Content from "../components/content"
// import Skills from "../components/skills"

// TO DO: include <Projects/> component for each present/prior project worked on

export default function DevProjects() {
  return (
    <Layout>
      <Content
        seo="Projects"
        title="Development Projects"
        p1="Will be array of projects with image, desc, and links to code/live site if exists"
      />
    </Layout>
  )
}
