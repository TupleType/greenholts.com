import React, { useEffect, useRef, memo } from "react";
import { useInView } from "react-intersection-observer";
import "./Fade.css";

const getDirectionClass = (direction) => `fade-${direction}`;

const Fade = memo(
  ({
    children,
    direction = "left",
    duration = 500,
    distance = "200px",
    className = "",
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.05,
    });
    const containerRef = useRef(null);

    useEffect(() => {
      if (inView && containerRef.current) {
        containerRef.current.classList.add("fade-visible");
      }
    }, [inView]);

    const baseClassName = `fade ${getDirectionClass(direction)}`;
    const finalClassName = `${baseClassName} ${className}`.trim();
    const style = {
      "--fade-duration": `${duration}ms`,
      "--fade-distance": distance,
    };

    return (
      <div
        ref={(element) => {
          ref(element);
          containerRef.current = element;
        }}
        className={finalClassName}
        style={style}
      >
        {children}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.direction === nextProps.direction &&
      prevProps.duration === nextProps.duration &&
      prevProps.distance === nextProps.distance &&
      prevProps.className === nextProps.className
    );
  }
);

Fade.displayName = "Fade";

export default Fade;
