import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Producer. Entrepreneur. Designer. Investor. Inventor. <br /> Future
            Baby Daddy
          </h2>
          <p>You wanna work together? Hit my line</p>
          <p>
            <b>
              Send a DM to{" "}
              <a href="https://instagram.com/itsobinna">
                https://instagram.com/itsobinna
              </a>{" "}
            </b>
          </p>
          <p>
            Or if that's not your thing, just fill out the form and I'ma get
            back to you ASAP{" "}
          </p>

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                YOUR NAME{" "}
                <input
                  type="text"
                  name="name"
                  style={{ backgroundColor: "white" }}
                />
              </label>
            </p>
            <p>
              <label>
                YOUR EMAIL{" "}
                <input
                  type="email"
                  name="email"
                  style={{ backgroundColor: "white" }}
                />
              </label>
            </p>
            <p>
              <label>
                A MESSAGE{" "}
                <textarea
                  name="message"
                  style={{ backgroundColor: "white", minHeight: `5rem` }}
                />
              </label>
            </p>
            <p>
              {/* <button type="submit">SEND</button> */}
              <button
                type="submit"
                style={{
                  marginTop: `0.5rem`,
                  fontWeight: "700",
                  backgroundColor: `gold`,
                  color: `black`,
                  width: `max-content`,
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  paddingLeft: `1rem`,
                  paddingRight: `1rem`,
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              >
                SEND
              </button>
            </p>
          </form>
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
