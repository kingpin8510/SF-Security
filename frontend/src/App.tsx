import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" Component={LandingPage} />
              <Route path="/admin" Component={AdminDashboard} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;