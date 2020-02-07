import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/storeLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const StorePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const items = data.allMarkdownRemark.edges

  let ItemsList = items.map(item => {
    return (
      <Link
        to={item.node.fields.slug}
        style={{
          width: `100%`,
          height: `fit-content`,
          textAlign: "center",
          textDecoration: `none`,
          color: "white",
        }}
      >
        <Img fluid={item.node.frontmatter.thumbnail.childImageSharp.fluid} />
        <div>
          <h5
            style={{
              marginTop: `1rem`,
              marginBottom: `0rem`,
              textTransform: `uppercase`,
            }}
          >
            {item.node.frontmatter.title}
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
            {item.node.frontmatter.subtitle}
          </p>
          <div
            style={{
              marginTop: `0.5rem`,
              fontWeight: "700",
              backgroundColor: `gold`,
              color: `black`,
              width: `max-content`,
              marginLeft: `auto`,
              marginRight: `auto`,
              paddingLeft: `0.5rem`,
              paddingRight: `0.5rem`,
            }}
          >
            ${item.node.frontmatter.price}
          </div>
        </div>
      </Link>
    )
  })

  return (
    <Layout title={siteTitle}>
      <SEO title="Store" />

      <StoreContainer>{ItemsList}</StoreContainer>
    </Layout>
  )
}

const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin-top: 4rem;
  margin-right: 4rem;
  margin-left: 4rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const storeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___price], order: DESC }
      filter: { frontmatter: { type: { eq: "product" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            subtitle
            price
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
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
    query={storeQuery}
    render={data => (
      <StorePage location={props.location} data={data} {...props} />
    )}
  />
)
