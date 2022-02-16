import React, { useState, useRef } from "react";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <div className="mx-auto flex-col flex justify-center items-center">
            <Header />
            <main
              className="w-full py-8 px-0 overflow-hidden relative"
              style={{ height: `calc(100vh - 48px)` }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
