/* Styles */
import "bootstrap/dist/css/bootstrap.min.css";

/* Libraries */
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

/* Components */
import App from "./App";
import { MeasureFilterContextProvider } from "./context/MeasureFilterContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MeasureFilterContextProvider>
        <App />
      </MeasureFilterContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
