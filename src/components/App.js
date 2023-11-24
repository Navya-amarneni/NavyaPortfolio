import React from "react";
import "../components/css/App.css";
import "../components/css/Home.css";

// import Navbar from "./navbar/NavBar";
import Home from "./Home";
import Cards from "./utils/Cards";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <section id="home">
        <Home />
      </section>
      <section id="cards">
        <Cards />
      </section>
    </div>
  );
}

export default App;
