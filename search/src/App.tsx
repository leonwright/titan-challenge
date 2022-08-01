import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import SearchResult from "./components/SearchResult";
import { ApplicationContext } from "./context/application.context";
import Search from "./components/Search";

function App() {
  return (
    <ApplicationContext.Provider value={useState(data)}>
      <div className="h-screen bg-blue-400 flex flex-col justify-center items-center">
        <Search />
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;
