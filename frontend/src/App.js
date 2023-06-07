import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Learn from "./Components/learn";
import Compete from "./Components/compete";
import Profile from "./Components/profile";
import Navbar from "./Components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/compete" element={<Compete />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
