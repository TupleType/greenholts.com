import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const TooltipPortal = ({ text, anchorEl }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.top - 40 + window.scrollY,
        left: rect.left + rect.width / 2,
      });
    }
  }, [anchorEl]);

  if (!anchorEl) return null;

  return ReactDOM.createPortal(
    <div
      className="tooltip-portal"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateX(-50%)",
      }}
    >
      {text}
    </div>,
    document.body
  );
};

export default TooltipPortal;
