import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./Error.css";
import theme from "@/app/theme";
import AsiImage from "../../../public/images/pablo.jpg";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Error() {
  return (
    <div className="error-container">
      <Header />
      <div className="error-class">
        <h1 className="error-404">
          Page Not Found
          <br />
          (404)
        </h1>
        <ExportedImage
          src={AsiImage}
          alt="Asi not found"
          className="error-class-img"
        />
        <Link
          href="/"
          className="main-button"
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
      <Footer />
    </div>
  );
}
