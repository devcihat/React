import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import AnaMenu from "./components/AnaMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <AnaMenu />
      <Footer />
    </div>
  );
}

export default App;
