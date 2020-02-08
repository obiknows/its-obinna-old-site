import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

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
              <Link className="site-head-logo" to={`/`}>
                {title}
              </Link>
              <div
                style={{
                  backgroundColor: `#219653`,
                  color: `white`,
                  padding: 5,
                }}
              >
                <b>SERVICES</b>
              </div>
            </div>
            <nav id="swup" className="site-head-middle">
              <ul className="nav" role="menu">
                <li className="" role="menuitem">
                  <button onClick={() => scrollTo("#beats")}>Beats</button>
                </li>
                <li className="nav-elements" role="menuitem">
                  <button onClick={() => scrollTo("#wealth")}>Wealth</button>
                </li>
                <li className="nav-tags" role="menuitem">
                  <button onClick={() => scrollTo("#health")}>Health</button>
                </li>
                <li className="nav-tags" role="menuitem">
                  <button onClick={() => scrollTo("#tech")}>Tech</button>
                </li>
                <li className="nav-tags" role="menuitem">
                  <button onClick={() => scrollTo("#more")}>More</button>
                </li>
                <li className="nav-tags" role="menuitem">
                  <Link to={`/`}>Back To The Site</Link>
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
      <footer>
        <div className="footer-container">
          <br />
          <br />
          <div className="collabo" style={{ lineHeight: `4rem` }}>
            <p>Got an interesting project? Let's link up.</p>
          </div>
          <br />
          <div className="hr" />
          <br />
          <br />
          <div className="info">
            <div className="connect">
              <p>connect with me</p>
              <h4>ig @itsobinna</h4>
            </div>
            <div className="check">
              <p>check the socials</p>
              <ul className="social">
                <li className="instagram">ig</li>
                <li className="youtube">yt</li>
                <li className="github">gh</li>
                <li className="pinterest">pin</li>
              </ul>
            </div>
            <div className="say-hello">
              <p>say hello</p>
              <h4>obiknows88@gmail.com</h4>
            </div>
          </div>
          <br />
          <div className="site-foot">
            &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
            &mdash; Built by{" "}
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
      {/* FOOTER - END */}
      {/* <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built by{" "}
        <a
          href="https://instagram.com/itsobinna"
          target="_blank"
          rel="noopener noreferrer"
        >
          Obinna
        </a>
      </footer> */}
    </div>
  )
}

export default Layout
