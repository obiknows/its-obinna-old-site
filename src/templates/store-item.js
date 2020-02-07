import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/storeLayout"
import SEO from "../components/seo"

class StoreItemTemplate extends React.Component {
  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={item.frontmatter.title}
          description={item.frontmatter.description || item.excerpt}
        />

        {/*  */}
      </Layout>
    )
  }
}

export default StoreItemTemplate

export const pageQuery = graphql`
  query StoreItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
