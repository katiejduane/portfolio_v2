import React from "react"

import Layout from "../components/layout"
import Content from "../components/content"
import styles from "../styles/layout.module.scss"
import jasper from "../assets/creative/Jasper.pdf"
import writingImg from "../assets/images/journal.png"

export default function WritingPage() {
  return (
    <Layout>
      <Content
        seo="Writing & Art"
        title="Writing & Art"
        image={writingImg}
        alt="Writing journal"
        p1="I tend to write nonfiction and my work often explores the connections between the personal and the scientific. 
        I am especially fascinated by time, impermanance, biology, geology, physics, and the natural world. Please find links to 
        published works below. Additional pieces forthcoming."
        p2="I also have degrees in Illustration and Art Education; and have worked professionally
        as an artist, designer, photographer, and teacher. At present, I find I'm happier working in technology, 
        and living as an artist in my off hours :) I enjoy drawing, painting, collage and photography. "
      />
      <div className={styles.subContent}>
        <h4>Published Works</h4>
        <div className={styles.linkBox}>
          <ul>
            <li>
              <a
                href="https://www.themanifeststation.net/2018/06/04/m45/"
                target="blank"
                rel="noreferrer"
              >
                M45, essay
              </a>
            </li>
            <li>
              <a href={jasper} target="blank" rel="noreferrer">
                Jasper, poem
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
