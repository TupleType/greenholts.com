"use client";

import Fade from "@/components/Fade/Fade";
import styles from "./ResponsiveAnimation.module.css";

export default function ResponsiveAnimation({
  children,
  direction,
  duration,
  distance,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileContent}>{children}</div>
      <div className={styles.desktopContent}>
        <Fade direction={direction} duration={duration} distance={distance}>
          {children}
        </Fade>
      </div>
    </div>
  );
}
