import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/servicesLayout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ServicesPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Services" />

      {/* BEATS - SECTION HEADER */}
      <SectionHeaderText id="beats">HERE FOR THE BEATS?</SectionHeaderText>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreak />
      <SectionBreak />

      <ServicesContainer>
        <ServiceItem>Custom Beat(s)</ServiceItem>
        <ServiceItem>Mix & Mastering</ServiceItem>
        {/* <ServiceItem>fdafsa</ServiceItem> */}
      </ServicesContainer>

      {/* WEALTH - SECTION HEADER INV */}
      {/* <SectionHeaderTextInverted id="wealth">
        HERE FOR THE WEALTH?
      </SectionHeaderTextInverted> */}
      {/* 2 HORIZONTAL LINES INV */}
      {/* <SectionBreakInverted />
      <SectionBreakInverted /> */}

      {/* <ServicesContainer>
        <ServiceItem>fdafsa</ServiceItem>
      </ServicesContainer> */}

      {/* HEALTH - SECTION HEADER */}
      <SectionHeaderTextInverted id="health">
        HERE FOR THE HEALTH?
      </SectionHeaderTextInverted>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreakInverted />
      <SectionBreakInverted />

      <ServicesContainer>
        <ServiceItem>Free Health Consultation</ServiceItem>
      </ServicesContainer>

      {/* TECH - SECTION HEADER INV */}
      <SectionHeaderText id="tech">HERE FOR THE TECH?</SectionHeaderText>
      {/* 2 HORIZONTAL LINES INV */}
      <SectionBreak />
      <SectionBreak />

      <ServicesContainer>
        <ServiceItem>Code Mentorship</ServiceItem>
        <ServiceItem>Custom Website</ServiceItem>
        <ServiceItem>Custom Webstore</ServiceItem>
        <ServiceItem>Custom Tech Project</ServiceItem>
      </ServicesContainer>

      {/* MORE - SECTION HEADER */}
      <SectionHeaderTextInverted id="more">
        ANYTHING ELSE?
      </SectionHeaderTextInverted>
      {/* 2 HORIZONTAL LINES */}
      <SectionBreakInverted />
      <SectionBreakInverted />

      <ServicesContainer>
        <ServiceItem>Custom Design</ServiceItem>
        <ServiceItem>Custom Merch</ServiceItem>
      </ServicesContainer>
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
  background-color: green;
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

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ServicesPage location={props.location} data={data} {...props} />
    )}
  />
)
