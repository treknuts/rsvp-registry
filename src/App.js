import Main from "./components/Main";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='container-fluid min-vh-100 m-0 p-0'>
      <BrowserRouter>
        <Navbar />
        <main className='min-vh-100 p-md-0 p-4 d-flex flex-column justify-content-center align-items-center'>
          <Main />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
