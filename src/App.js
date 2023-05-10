import React from "react";

import {
  Footer,
  Blog,
  Features,
  Possibility,
  Header,
  whatGPT,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
