import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./container/HomePage";
import PostPage from "./container/PostPage";
import Header from "./Header";
import UserPage from "./container/UserPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`App min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-4 pb-12">
          <Routes>
            <Route path="/post/:postId" element={<PostPage />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800">
          Posts Browser &mdash; Powered by JSONPlaceholder
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
