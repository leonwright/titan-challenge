import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ApplicationContextProvider } from "./application.context";
import { ReactQueryContextProvider } from "./react-query.context";

export const Providers = ({ children }) => {
  return (
    <ApplicationContextProvider>
      <ReactQueryContextProvider>{children}</ReactQueryContextProvider>
    </ApplicationContextProvider>
  );
};
