import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ParentHome from "./pages/ParentHome";
import ConceptToproduct from "./pages/ConceptToproduct";
import ProductToBuisness from "./pages/ProductToBuisness";

function App() {
  return (
    <NextUIProvider>
      <div className="font-primary">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/home1"
              element={<ParentHome />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/concepttoproduct"
              element={<ConceptToproduct />}
            />
            <Route
              path="/producttobuisness"
              element={<ProductToBuisness />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </NextUIProvider>
  );
}

export default App;
