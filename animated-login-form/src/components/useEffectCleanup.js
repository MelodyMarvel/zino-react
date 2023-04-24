import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <div className="--center-all">
      <h1>Screen Width</h1>
      <h2>{width}</h2>
    </div>
  );
};
export default UseEffectCleanup;
