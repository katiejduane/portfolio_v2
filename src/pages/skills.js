import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Content from "../components/content"
import Skills from "../components/skills"

// TO DO: Add sectiosns for other skills; professional general, educationa, yoga, creative, etc...
// or maybe have them split at a higher lever: tech, edu, creative, yoga

export default function Development() {
  return (
    <Layout>
      <Content seo="Skills" title="Skills" />
      <Skills
        header="Frontend Development:"
        skills="React.js, Redux, Javascript, jQuery, CSS, SASS, HTML"
      />
      <Skills
        header="Backend Development:"
        skills="Node.js, Express, PostgreSQL, Sequelize, Python"
      />
      <Skills header="Testing:" skills="Cypress, Selenium, Mocha.js, Ava.js" />
      <Skills
        header="Other Technologies:"
        skills="Gatsby, Jekyll, CircleCI, Github Actions, Firebase, Adobe PhotoShop, Adobe Illustrator, Adobe InDesign"
      />
      <Skills
        header="Technologies I'm learning right now..."
        skills="Wordpress, PHP, Angular"
      />
    </Layout>
  )
}
