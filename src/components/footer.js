/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        return (
          <footer>
            <div className="footer-container">
              <br />
              <br />
              <div className="collabo" style={{ lineHeight: `4rem` }}>
                <Link to="/contact" style={{ color: `white` }}>
                  <p>Got an interesting project? Let's link up.</p>
                </Link>
              </div>
              <br />
              <div className="hr" />
              <br />
              <br />
              <div className="info">
                <div className="connect">
                  <p>connect with me</p>
                  <h4>
                    ig{" "}
                    <FooterSocialLink href="https://instagram.com/@itsobinna">
                      @itsobinna
                    </FooterSocialLink>
                  </h4>
                </div>
                <div className="check">
                  <p>check the socials</p>
                  <ul className="social">
                    <li className="instagram">
                      <FooterSocialLink href="https://instagram.com/@itsobinna">
                        ig
                      </FooterSocialLink>
                    </li>
                    <li className="youtube">
                      <FooterSocialLink href="https://youtube.com/">
                        yt
                      </FooterSocialLink>
                    </li>
                    <li className="github">
                      <FooterSocialLink href="https://github.com/obiknows">
                        gh
                      </FooterSocialLink>
                    </li>
                    <li className="pinterest">
                      <FooterSocialLink href="https://pinterest.com/">
                        pin
                      </FooterSocialLink>
                    </li>
                  </ul>
                </div>
                <div className="say-hello">
                  <p>say hello</p>
                  <Link to="/contact" style={{ color: `white` }}>
                    <h4>obiknows88@gmail.com</h4>
                  </Link>
                </div>
              </div>
              <br />
              <div className="site-foot">
                &copy; {new Date().getFullYear()}{" "}
                <Link to={`/`}>{data.site.siteMetadata.title}</Link> &mdash;
                Built by{" "}
                <a
                  href="https://instagram.com/itsobinna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obinna
                </a>
              </div>
            </div>
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query FooterQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitter
        }
      }
    }
  }
`

const FooterSocialLink = styled.a`
  color: white;
  text-decoration: none;
`

export default Footer
