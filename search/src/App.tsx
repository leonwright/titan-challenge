import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import { Providers } from "./context";

function App() {
  return (
    <Providers>
      <div className="h-screen bg-blue-400 flex flex-col justify-center items-center overflow-y-auto">
        <Search />
      </div>
    </Providers>
  );
}

export default App;
