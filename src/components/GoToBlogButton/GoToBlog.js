"use client";

import React from "react";
import Button from "@/components/button/Button";
import Fade from "@/components/Fade/Fade";

export default function GoToBlog(props) {
  const theme = props.theme;
  return (
    <Fade direction="right" duration={1000}>
      <Button text={"Go To Blog"} href="/blog"></Button>
    </Fade>
  );
}
