import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import styles from "../styles/layout.module.scss"
import techResume from "../assets/other/katiejduane_2020T.pdf"
import fullResume from "../assets/other/kathryn_duane_CV.pdf"
import sky from "../assets/images/sky.png"

const ContactPage = () => (
  <Layout>
    <Content
      seo="Contact"
      title="Contact"
      // or here for gatsby image?
      image={sky}
      alt="Blue sky"
      p1="You can learn more about me by following any of the links below, or send me
        an email and say hello :]"
    />
    <div className={styles.subContent}>
      <div className={styles.linkBox}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/kathrynjduane/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/katiejduane"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a href={techResume} download>
              Tech Resume
            </a>
          </li>
          <li>
            <a href={fullResume} download>
              Full Resume
            </a>
          </li>
          <li>
            <a href="mailto:katiejduane@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default ContactPage
