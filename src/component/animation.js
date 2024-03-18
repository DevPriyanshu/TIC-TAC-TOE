import React, { useState, useEffect } from "react";
import "../App.css";

const Animation = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <div className={isAnimating ? "animation" : ""}>{children}</div>;
};

export default Animation;
