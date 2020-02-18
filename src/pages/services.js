import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/servicesLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ServicesPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const services = data.allMarkdownRemark.edges

  const Beats = services.filter(
    service => service.node.frontmatter.category === "Beats"
  )
  const Techs = services.filter(
    service => service.node.frontmatter.category === "Tech"
  )
  const Healths = services.filter(
    service => service.node.frontmatter.category === "Health"
  )
  const Mores = services.filter(
    service => service.node.frontmatter.category === "More"
  )
  // const Wealths = services.filter(service => service.node.frontmatter.category === "Wealth")

  let BeatsServices = Beats.map(service => {
    return (
      <Link
        to={service.node.fields.slug}
        style={{ textAlign: "center", color: `white` }}
      >
        <ServiceItem>
          <Img
            fixed={service.node.frontmatter.thumbnail.childImageSharp.fixed}
          />
        </ServiceItem>
        <p style={{ marginTop: 20, fontSize: 20 }}>
          {service.node.frontmatter.title}
        </p>
      </Link>
    )
  })
  let TechServices = Techs.map(service => {
    return (
      <Link
        to={service.node.fields.slug}
        style={{ textAlign: "center", color: `white` }}
      >
        <ServiceItem>
          <Img
            fixed={service.node.frontmatter.thumbnail.childImageSharp.fixed}
          />
        </ServiceItem>
        <p style={{ marginTop: 20, fontSize: 20 }}>
          {service.node.frontmatter.title}
        </p>
      </Link>
    )
  })
  let HealthServices = Healths.map(service => {
    return (
      <Link
        to={service.node.fields.slug}
        style={{ textAlign: "center", color: `white` }}
      >
        <ServiceItem>
          <Img
            fixed={service.node.frontmatter.thumbnail.childImageSharp.fixed}
          />
        </ServiceItem>
        <p style={{ marginTop: 20, fontSize: 20 }}>
          {service.node.frontmatter.title}
        </p>
      </Link>
    )
  })
  let MoreServices = Mores.map(service => {
    return (
      <Link
        to={service.node.fields.slug}
        style={{ textAlign: "center", color: `white` }}
      >
        <ServiceItem>
          <Img
            fixed={service.node.frontmatter.thumbnail.childImageSharp.fixed}
          />
        </ServiceItem>
        <p style={{ marginTop: 20, fontSize: 20 }}>
          {service.node.frontmatter.title}
        </p>
      </Link>
    )
  })

  return (
    <Layout title={siteTitle}>
      <SEO title="Services" />

      {/* BEATS - SECTION HEADER */}
      <SectionHeaderText id="beats">HERE FOR THE BEATS?</SectionHeaderText>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreak />
      <SectionBreak />

      <ServicesContainer>{BeatsServices}</ServicesContainer>

      {/* HEALTH - SECTION HEADER */}
      <SectionHeaderTextInverted id="health">
        HERE FOR THE HEALTH?
      </SectionHeaderTextInverted>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreakInverted />
      <SectionBreakInverted />

      <ServicesContainer>{HealthServices}</ServicesContainer>

      {/* TECH - SECTION HEADER INV */}
      <SectionHeaderText id="tech">HERE FOR THE TECH?</SectionHeaderText>
      {/* 2 HORIZONTAL LINES INV */}
      <SectionBreak />
      <SectionBreak />

      <ServicesContainer>{TechServices}</ServicesContainer>

      {/* MORE - SECTION HEADER */}
      <SectionHeaderTextInverted id="more">
        ANYTHING ELSE?
      </SectionHeaderTextInverted>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreakInverted />
      <SectionBreakInverted />

      <ServicesContainer>{MoreServices}</ServicesContainer>
    </Layout>
  )
}

// STYLED COMPONENTS
const ServicesContainer = styled.div`
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
const ServiceItem = styled.div`
  // background-color: green;
  height: 200px;
`

const SectionBreak = styled.div`
  width: 55%;
  height: 0.77rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.88);
`
const SectionBreakInverted = styled.div`
  margin-left: auto;
  width: 55%;
  height: 0.77rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.88);
`

const SectionHeaderText = styled.h2`
  margin-bottom: 1rem;
  margin-top: 7rem;
  font-family: "Roboto Mono";
`
const SectionHeaderTextInverted = styled.h2`
  text-align: right;
  margin-top: 7rem;
  margin-bottom: 1rem;
  font-family: "Roboto Mono";
`

const servicesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "service" }, draft: { ne: true } } }
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
            draft
            subtitle
            category
            description
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 2000) {
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
    query={servicesQuery}
    render={data => (
      <ServicesPage location={props.location} data={data} {...props} />
    )}
  />
)
