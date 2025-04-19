import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import GroupPage from "./pages/GroupPage";

import "./index.css";
import Navbar from "./components/themeTogglt-Btn/navbar/Navbar";

function App() {
  const links = [
    {
      path: "/",
      label: "Home",
      element: <Home />,
    },

    {
      path: "/dashboard",
      label: "Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      label: "Profile",
      element: <Profile />,
    },
  ];

  return (
    <Router>
      <Navbar links={links} />
      <Routes>
        {links.map((link, i) => (
          <Route key={i} path={link.path} element={link.element} />
        ))}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        */}
        <Route path="/group/:id" element={<GroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
