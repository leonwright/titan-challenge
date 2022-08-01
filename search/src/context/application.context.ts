import React from "react";

export interface ISearchResult {
  username: string;
  post_date: string;
  message: string;
}

export const ApplicationContext = React.createContext<any>(null);
