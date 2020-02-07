import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/workLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const WorkPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Work" />
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <WorkPage location={props.location} data={data} {...props} />
    )}
  />
)
