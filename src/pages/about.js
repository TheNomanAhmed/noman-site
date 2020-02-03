import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            I have been in the field of graphic design for 6 years and worked
            with some great clients and startups. As my background is from
            Computer engineering, I have always kept myself updated with latest
            digital technologies and tried learning them. I also have a strong
            set of skills in programming which helped me to learn front-end
            development. Besides from my technical background, I have always
            enjoyed working on the design aspects of different applications. I
            love using Adobe tools and made myself familiar with Photoshop,
            Illustrator, Adobe XD and Figma. Currently I am working on creating
            web application in Figma and implementing it using Tailwind CSS and
            GatsbyJS projects. As a freelancer UI/UX designer, I’ve specialized
            in the creation of responsive websites and visual identities for
            clients across the world. The work I create helps my clients move
            closer to their goals. The aim is to boost client profits through
            improved attraction and retention of ideal customer bases.
          </p>
          <p>
            You can find some of my latest work at{" "}
            <a href="https://www.behance.net/thenomanahmed">Behance</a>
            {", "}
            <a href="https://dribbble.com/TheNomanAhmed">Dribbble</a>
            {", "}
            <a href="https://www.github.com/thenomanahmed/">Github</a>
            {" and "}
            <a href="https://www.linkedin.com/in/TheNomanAhmed/">LinkedIn</a>
            {"."}
          </p>

          {/* 

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>

 */}

          {/* 

          <h3 id="dynamic-styles">Dynamic styles</h3>
          <p>
            London comes with photo-centric main layout best suited to
            photography, graphics portfolios and other image-heavy uses.
          </p>
          <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>

 */}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
