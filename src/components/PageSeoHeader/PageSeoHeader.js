import { Helmet } from "react-helmet";
import React from "react";

function PageSeoHeader({ title, jsonld }) {
  return (
    <Helmet>
      <title>{title}</title>
      <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
}

export default PageSeoHeader;
