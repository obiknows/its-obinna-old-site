import React from "react"
import { Link } from "gatsby"

import Cart from "./cart"
import Footer from "./footer"

// added in a cart from a cart component (from here --> https://www.frontendstumbles.com/gatsby-and-snipcart-ecommerce-tutorial/)
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
              className="site-head-center-container"
              style={{
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
              }}
            >
              <Link className="site-head-logo" to={`/store`}>
                {title}
              </Link>
              <div
                className="site-head-logo-box"
                style={{
                  backgroundColor: `#D35151`,
                  color: `white`,
                  padding: 5,
                }}
              >
                <b>STORE</b>
              </div>
            </div>
            <nav id="swup" className="site-head-middle">
              <ul className="nav" role="menu">
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/store/beats`}>Beats</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/store/wealth`}>Wealth</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/store/health`}>Health</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/store/tech`}>Tech</Link>
                </li>
                <li className="nav-tags hidden" role="menuitem">
                  <Link to={`/store/more`}>More</Link>
                </li>
                <li className="nav-tags" role="menuitem">
                  <Link to={`/`}>Back To The Site</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* OLD SITE RIGHT NAV */}
          <div style={{ position: `absolute`, right: 0 }}>
            <Cart />
          </div>
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
