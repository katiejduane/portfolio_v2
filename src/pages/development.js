import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Content from "../components/content"
import Skills from "../components/skills"

const Development = () => (
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Development
