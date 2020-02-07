import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

import soulTee from "../images/our-soul-tee.png"
import ankaraHoodie from "../images/soul-ankara.png"
import goldSoul from "../images/gold-soul.png"

import Layout from "../components/storeLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const StorePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const items = data.allMarkdownRemark.edges

  // items.forEach(element => console.log(element))

  return (
    <Layout title={siteTitle}>
      <SEO title="Store" />

      <StoreContainer>
        {/* {items.forEach(item  => {
          // the link
          console.log(item.node.fields.slug)

          // the title, subtitle, price, images
          console.log(item.node.frontmatter.title)
          console.log(item.node.frontmatter.subtitle)
          console.log(item.node.frontmatter.price)
          let itemThumbnail = item.node.frontmatter.thumbnail.childImageSharp.fluid
          
          return (
            <Link to={item.node.fields.slug} style={{ width: `100%`, height: `fit-content`, textAlign: 'center', textDecoration: `none`, color: 'white' }}>
              <Img fluid={itemThumbnail} />
              <div>
                <h5 style={{marginTop: `1rem`, marginBottom: `0rem`, textTransform: `uppercase`}}>{item.node.frontmatter.title}</h5>
                <p style={{marginTop: `0rem`, marginBottom: `1rem`, textTransform: `uppercase`, letterSpacing: 2, fontSize: 12, lineHeight: `initial`}}>{item.node.frontmatter.subtitle}</p>
                <div style={{marginTop: `0.5rem`, fontWeight: '700', backgroundColor: `gold`, color: `black`, width: `max-content`, marginLeft: `auto`, marginRight: `auto`, paddingLeft: `0.5rem`,  paddingRight: `0.5rem`,}}>${item.node.frontmatter.price}</div>
              </div>
            </Link>
          )
        })} */}

        <Link
          to="/store/soul-tee"
          style={{
            width: `100%`,
            height: `fit-content`,
            textAlign: "center",
            textDecoration: `none`,
            color: "white",
          }}
        >
          <img src={soulTee} />
          <div>
            <h5
              style={{
                marginTop: `1rem`,
                marginBottom: `0rem`,
                textTransform: `uppercase`,
              }}
            >
              Soul Globe
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
              Tee
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
              $30
            </div>
          </div>
        </Link>

        <Link
          to="/store/soul-parka"
          style={{
            width: `100%`,
            height: `fit-content`,
            textAlign: "center",
            textDecoration: `none`,
            color: "white",
          }}
        >
          <img src={goldSoul} />
          <div>
            <h5
              style={{
                marginTop: `1rem`,
                marginBottom: `0rem`,
                textTransform: `uppercase`,
              }}
            >
              GOLD SOUL
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
              Parka
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
              $70
            </div>
          </div>
        </Link>

        <Link
          to="/store/ankara-hoodie"
          style={{
            width: `100%`,
            height: `fit-content`,
            textAlign: "center",
            textDecoration: `none`,
            color: "white",
          }}
        >
          <img src={ankaraHoodie} />
          <div>
            <h5
              style={{
                marginTop: `1rem`,
                marginBottom: `0rem`,
                textTransform: `uppercase`,
              }}
            >
              SOUL Ankara
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
              Hoodie
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
              $70
            </div>
          </div>
        </Link>
      </StoreContainer>
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
      sort: { fields: [frontmatter___date], order: DESC }
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
