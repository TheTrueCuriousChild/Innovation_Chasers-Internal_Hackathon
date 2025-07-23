import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [showBooking, setShowBooking] = useState(false);

  const handleBookNow = () => {
    setShowBooking(true);
  };

  return (
    <div className="container">
      {!showBooking ? (
        <button className="button" onClick={handleBookNow}>
          Book Now
        </button>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {[1, 2, 3, 4].map((turfId) => (
            <div className="turf-container" key={turfId}>
              <h3>Turf {turfId}</h3>
              <label>Select time:</label>
              <select>
                <option>6:00 AM</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookNow;
