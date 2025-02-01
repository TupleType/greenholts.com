import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenuToggle = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header
            className={`header ${this.state.isMenuOpen ? "menu-open" : ""}`}
          >
            <a href="home" className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                &gt;&gt;&gt; Asi Greenholts
              </span>
              <span style={{ color: theme.text }}></span>
            </a>
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              onChange={this.handleMenuToggle}
              checked={this.state.isMenuOpen}
            />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <a
                  href="/?/home"
                  style={{ color: theme.text }}
                  className="menu-item"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/?/blog"
                  style={{ color: theme.text }}
                  className="menu-item"
                >
                  Blog
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
