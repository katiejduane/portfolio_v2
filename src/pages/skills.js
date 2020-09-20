import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Content from "../components/content"
import Skills from "../components/skills"
import SoftSkills from "../components/softskills"
import styles from "../styles/layout.module.scss"
import skillsImg from "../assets/images/resdotjson.png"

// TO DO: Add sectiosns for other skills; professional general, educationa, yoga, creative, etc...
// or maybe have them split at a higher lever: tech, edu, creative, yoga

export default function Development() {
  return (
    <Layout>
      <Content seo="Skills" title="Skills" image={skillsImg} alt="Javascript" />
      <div className={styles.centeringWrapper}>
        <Skills
          header="Frontend Development:"
          skills="React.js, Redux, JavaScript, jQuery, CSS, SASS, HTML"
          // icons=""
        />
        <Skills
          header="Backend Development:"
          skills="Node.js, Express, PostgreSQL, Sequelize, Python"
          // icons=""
        />
        <Skills
          header="Testing:"
          skills="Cypress, Selenium, Mocha.js, React Testing Library"
        />
        <Skills
          header="Other Technologies:"
          skills="Gatsby, Jekyll, CircleCI, Github Actions, Firebase, Adobe PhotoShop, Adobe Illustrator, Adobe InDesign"
          // icons=""
        />
        <Skills
          header="Tech I'm learning right now:"
          skills="Wordpress, PHP, Angular"
          // icons=""
        />
        <hr></hr>
        <SoftSkills
          header="General"
          p="Written and oral communication, collaboration, team management,
        goal-setting, time-management, organization, and motivation. Advanced
        Spanish speaker/reader."
        />
        <SoftSkills
          header="Art / Writing"
          p="Writing nonfiction and poetry, editing, revision, research / Drawing, painting,
        mixed-media, photography (film and digital), portraiture, bookbinding."
        />
        <SoftSkills
          header="Yoga"
          p="RYT-200 certified yoga teacher specializing in anatomy of asanas and
      creating a safe practice with use of props, modifications, and
      assists."
        />
        <SoftSkills
          header="Education"
          p="K-12 certified specializing in secondary education in the Visual Arts.
      Experienced in lesson planning, curriculum development, and teaching
      in multilingual classrooms implementing English-language-learning
      objectives within projects and lessons. Trained in trauma-sensitive
      educational practices. Excel in classroom management systems, project
      design and management, and tracking of student engagement, growth, and
      goals."
        />
      </div>
    </Layout>
  )
}
