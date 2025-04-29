import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import GroupPage from "./pages/GroupPage";

import "./index.css";
import Navbar from "./components/themeTogglt-Btn/navbar/Navbar";
import Notfound from "./pages/notfound";
import Signup from "./pages/signup/signup";

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
        .
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        */}
        <Route path="/group/:id" element={<GroupPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
