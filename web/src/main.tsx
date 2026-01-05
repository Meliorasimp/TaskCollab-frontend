import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import { store } from "./store/index.ts";
import { apolloClient } from "./lib/apolloClient";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
          <Toaster />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
