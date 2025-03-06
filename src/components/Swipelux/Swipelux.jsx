import React from "react";
import { SwipeluxWidget } from "@swipelux/onramp-react";
import "./swipelux.css";

const Swipelux = ({ openWidget, onClose }) => {
  if (!openWidget) return null; // Hide if not open

  return (
    <div className="swipelux-overlay" onClick={onClose}>
      <div className="swipelux-container" onClick={(e) => e.stopPropagation()}>
        <button className="swipelux-close" onClick={onClose}>✖</button>
        <SwipeluxWidget
          widgetUrl="https://app.swipelux.com"
          apiKey="07a5f757-2759-4f46-913c-a6b71953976b"
          colors={{
            main: "#006666",
            background: "#181818",
            processing: "#FFA500",
            warning: "#FF0000",
            success: "#008000",
            link: "#FB9D4B",
          }}
        />
      </div>
    </div>
  );
};

export default Swipelux;
