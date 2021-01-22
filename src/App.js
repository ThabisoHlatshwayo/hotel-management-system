import React from "react";

import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Greetings from "./components/greetings";

function App(props) {
  if (props.isLoading === true){
    return (
      <div className="loading">
        <h1 id="title">Welcome to the Thabiso's stay Hotel App</h1>
      </div>
    )
  } else {
      return (
        <div>
        <Header />
        <Greetings />
        <MainContent />
        <Footer />
      </div>
      );
    }
}

export default App;
