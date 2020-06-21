import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Content from "../components/content"
import Skills from "../components/skills"

export default function Development() {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "images/icons/illustrator.png" }) {
  //       childImageSharp {
  //         fluid {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)
  // <Img fluid={data.file.childImageSharp.fluid} alt="ai" />
  return (
    <Layout>
      <Content
        seo="Development"
        title="Development"
        p1="Dev related chatter..."
      />
      <Skills
        header="Frontend:"
        skills="React.js, Redux, Javascript, CSS, SASS, HTML, Angular"
      />
      <Skills
        header="Backend:"
        skills="Node.js, Express, PostgreSQL, Sequelize, Python"
      />
      <Skills header="Testing:" skills="Cypress, Selenium, Mocha.js, Ava.js" />
      <Skills
        header="Everything else:"
        skills="CircleCI, Github Actions, Adobe PhotoShop, Adobe Illustrator, Adobe InDesign"
      />
      <Skills
        header="Learning right now..."
        skills="C#, Kotlin, Web Components, p5.js, Wordpress"
      />
    </Layout>
  )
}
