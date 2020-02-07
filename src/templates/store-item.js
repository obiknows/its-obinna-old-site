import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/storeLayout"
import SEO from "../components/seo"

class StoreItemTemplate extends React.Component {
  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    console.log(item)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={item.frontmatter.title + item.frontmatter.subtitle}
          description={item.frontmatter.description || item.excerpt}
        />
        <div style={{ textAlign: "center" }}>
          <h5
            style={{
              marginTop: `1rem`,
              marginBottom: `0rem`,
              textTransform: `uppercase`,
            }}
          >
            {item.frontmatter.title}
          </h5>
          <p
            style={{
              marginTop: `0rem`,
              marginBottom: `1rem`,
              textTransform: `uppercase`,
              letterSpacing: 2,
              fontSize: 12,
              lineHeight: `initial`,
            }}
          >
            {item.frontmatter.subtitle}
          </p>
          <Img
            fluid={item.frontmatter.thumbnail.childImageSharp.fluid}
            style={{
              maxWidth: `500px`,
              marginLeft: `auto`,
              marginRight: `auto`,
            }}
          />
        </div>
        <p>we made it</p>
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        price
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
