import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul> */}
          <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/" element={<Dashboard />}>
            </Route>
          </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
