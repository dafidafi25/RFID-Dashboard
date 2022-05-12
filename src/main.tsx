import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./pages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RegisterPage from "./pages/Pendaftaran";
import Detail from "./pages/Detail";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/pendaftaran">
          <Route index element={<RegisterPage />} />
        </Route>
        <Route path="/detail/:id">
          <Route index element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
