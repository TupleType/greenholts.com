import React from "react";
import Button from "../../components/button/Button";
import "./GoToBlog.css";
import { Fade } from "react-reveal";

export default function GoToBlog(props) {
  const theme = props.theme;
  return (
    <Fade left duration={1000}>
      <div className="btn-div">
        <Button
          text={
            <>
              <span className="btn">Go To Blog</span>
            </>
          }
          newTab={true}
          href="/blog"
          theme={theme}
        ></Button>
      </div>
    </Fade>
  );
}
