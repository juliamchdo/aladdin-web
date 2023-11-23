import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Home } from "./routes/Home.tsx";
import { Finalizados } from "./routes/Finalizados.tsx";
import { EmAberto } from "./routes/EmAberto.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "finalizados",
        element: <Finalizados />,
      },
      {
        path: "aberto",
        element: <EmAberto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
