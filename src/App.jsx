import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/pages/Frontend/SideNav";
import Dashboard from "./components/pages/Frontend/Dashboard/Dashboard";
import Analytics from "./components/pages/Frontend/Analytics/Analytics";
import Animalbite from "./components/pages/Frontend/AnimalBite/Animalbite";
import Footer from "./components/pages/Frontend/Footer";
import { StoreProvider } from "./components/pages/Frontend/Store/storeContext";

const App = () => {
  return (
    <StoreProvider>
 <Router>
      <div className="flex">

        <SideNav />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Animalbite" element={<Animalbite />} />
          </Routes>
       
        </div>
      </div>
    </Router>
    </StoreProvider>
   
  );
};

export default App;
