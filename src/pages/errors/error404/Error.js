import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={this.props.theme} />
        <div className="error-class">
          <h1 className="error-404">Page Not Found</h1>
          <h1 className="error-404">(404)</h1>
          <img
            src={`${process.env.PUBLIC_URL}images/pablo.jfif`}
            alt="Not Found"
          />
          <Link
            className="main-button"
            to="/home"
            style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
              display: "inline-flex",
            }}
          >
            Go Home
          </Link>
        </div>
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}
