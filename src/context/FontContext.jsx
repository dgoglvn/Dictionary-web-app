import { createContext, useState, useEffect } from "react";

const FontContext = createContext("serif");

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("serif");

  useEffect(() => {
    if (localStorage.getItem("font") === "serif") {
      document.documentElement.style.fontFamily = "serif";
    } else if (localStorage.getItem("font") === "sans-serif") {
      document.documentElement.style.fontFamily = "sans-serif";
    } else {
      document.documentElement.style.fontFamily = "monospace";
    }
  }, [font]);

  const fontChange = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      // console.log(e.target[i].value === e.target.value);
      // Don't really know where I'm going with this
      // Trying to make it so when if the page is refreshed it loads the font that is stored in localStorage
    }
    console.log(e.target.value);
    setFont(e.target.value);

    localStorage.font = e.target.value;
  };

  return (
    <FontContext.Provider value={{ font, setFont, fontChange }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;
