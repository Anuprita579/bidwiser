import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Auction from "./pages/Auction/index";

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auction" element={<Auction />} />
      </Routes>
    </>
  );
};
function App() {
  return (
    <Router>
      <div className="App">
        <main className="layoutSection">
          <AppContent />
        </main>
      </div>
    </Router>
  );
}

export default App;
