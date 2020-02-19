import React from "react"
import { Link } from "gatsby"

import Footer from "./footer"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <button
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </button>
          {/* OLD SITE LEFT NAV */}
          {/* <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Elements</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Tags</Link>
              </li>
            </ul>
          </nav> */}
          <div className="site-head-center">
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
              }}
            >
              <Link className="site-head-logo" to={`/blog`}>
                {title}
              </Link>
              <div
                style={{
                  backgroundColor: `#E4B123`,
                  color: `black`,
                  padding: 5,
                }}
              >
                <b>BLOG</b>
              </div>
            </div>
            <nav id="swup" className="site-head-middle">
              <ul className="nav" role="menu">
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/blog/beats`}>Beats</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/blog/wealth`}>Wealth</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/blog/tech`}>Tech</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/blog/health`}>Health</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/blog/more`}>More</Link>
                </li>
                {/* <li className="nav-tags" role="menuitem">
                  <Link to={`/blog/about`}>About</Link>
                </li> */}
                <li className="nav-tags" role="menuitem">
                  <Link to={`/`}>Back to Main Site</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* OLD SITE RIGHT NAV */}
          {/* <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link>
              <a
                href="https://github.com/vaporwavy/gatsby-london-after-midnight"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div> */}
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Layout
