import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProvider from "./styles/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
