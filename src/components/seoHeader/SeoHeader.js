import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <meta name="description" content={seo.description} />
      <meta http-equiv="Content-Type" content={seo.contentType} />
      <meta charset={seo.charset} />
      <meta name="viewport" content={seo.viewport}></meta>
      <meta property="og:title" content={seo.og.title} />
      <meta property="og:type" content={seo.og.type} />
      <meta property="og:url" content={seo.og.url} />
      <meta property="og:image" content={seo.og.image} />
      <meta property="og:image:width" content={seo.og.imageWidth} />
      <meta property="og:image:height" content={seo.og.imageHeight} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={seo.og.locale} />
      <meta name="twitter:card" content={seo.og.title} />
      <meta name="twitter:site" content={seo.xHandle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.og.image} />
    </Helmet>
  );
}

export default SeoHeader;
