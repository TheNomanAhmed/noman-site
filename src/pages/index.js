import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import ReactTypingEffect from "react-typing-effect"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <div>
      <Layout title={siteTitle}>
        <SEO title=" " keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        {/* <Bio /> */}
        <header className="page-head">
          <h2 className="page-head-title">
            <ReactTypingEffect
              staticText="UI/UX Designer who loves to"
              text={["code.", "design."]}
              speed={50} //text=["Hello.", "World!"]
              typingDelay={200}
              eraseDelay={5000}
            />
          </h2>
        </header>
        <div className="post-feed">
          {posts.map(({ node }) => {
            postCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={postCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
