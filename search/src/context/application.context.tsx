import React, { useState } from "react";
import { data } from "./../data";

export interface ISearchResult {
  username: string;
  post_date: string;
  message: string;
}

export const ApplicationContext = React.createContext<any>(null);

export const ApplicationContextProvider = ({ children }) => {
  return (
    <ApplicationContext.Provider value={useState([])}>
      {children}
    </ApplicationContext.Provider>
  );
};
