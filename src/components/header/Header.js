import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

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
            <NavLink to={"home"} tag={Link} className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                &gt;&gt;&gt; {greeting.name}
              </span>
              <span style={{ color: theme.text }}></span>
            </NavLink>
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
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="menu-item"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="menu-item"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
