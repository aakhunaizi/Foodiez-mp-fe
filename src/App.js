// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
// Components
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import CategoryList from "./components/categoryList";
import Home from "./components/Home";
import { Route } from "react-router";
import Routes from "./components/Routes";

// Data

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <div>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <ThemeProvider theme={theme[currentTheme]}>
        <Helmet>
          <title>Foodiez</title>
        </Helmet>
        <GlobalStyle />
        <Routes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
