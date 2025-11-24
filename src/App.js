import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import UploadCSV from "./UploadCSV";
import CleanResults from "./CleanResults";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<UploadCSV />} />
          <Route path="/upload" element={<UploadCSV />} />
          <Route path="/results" element={<CleanResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;