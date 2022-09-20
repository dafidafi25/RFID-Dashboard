import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RegisterPage from "./pages/Pendaftaran";
import Detail from "./pages/Detail";
import Login from "./pages/Authentication/login";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/detail/:id">
          <Route index element={<Detail />} />
        </Route>
        <Route path="/login">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
