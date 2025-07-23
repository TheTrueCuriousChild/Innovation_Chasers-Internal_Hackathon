import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookNow from "./components/BookNow.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <h1>Turf Booking</h1>
          <Link to="/book-now">Book Now</Link>
        </nav>

        <Routes>
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/" element={<p>Welcome to Turf Booking!</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
