import React from "react";
import Home from "./pages/Home.jsx";
import Vowp from "./pages/Vowp.jsx";
import Pgwp from "./pages/Pgwp.jsx";
import Spousal from "./pages/Spousal.jsx";
import Franco from "./pages/Franco.jsx";

const routes = {
  "/": Home,
  "/vowp": Vowp,
  "/pgwp": Pgwp,
  "/spousal": Spousal,
  "/sowp": Spousal,
  "/franco": Franco,
};

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = routes[pathname] || Home;

  return <Page />;
}
