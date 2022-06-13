import Main from "./components/Main";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='container-fluid min-vh-100 m-0 p-0'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
