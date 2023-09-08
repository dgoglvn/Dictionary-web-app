import { createContext, useState, useEffect } from "react";

const FontContext = createContext("serif");

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("serif");

  /* document.documentElement returns the element that is the root element of the document
   * which in this case is the <html> element.
   *
   * Else if statement to pair the font that is stored in localStorage to its
   * respective font
   */
  useEffect(() => {
    if (localStorage.getItem("font") === "serif") {
      document.documentElement.style.fontFamily = "serif";
    } else if (localStorage.getItem("font") === "sans-serif") {
      document.documentElement.style.fontFamily = "sans-serif";
    } else {
      document.documentElement.style.fontFamily = "monospace";
    }
  }, [font]);

  // A function to handle the change when the user selects a different font option
  const fontChange = (e) => {
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
