import React, { useState } from "react";
import "./TimeSlotSelector.css"; // or SlotSelector.css

const allSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

const formatSlotRange = (startIndex, duration) => {
  const endIndex = startIndex + duration;
  if (endIndex >= allSlots.length) return null;
  return `${allSlots[startIndex]} – ${allSlots[endIndex]}`;
};

const TimeSlotSelector = () => {
  const [duration, setDuration] = useState(1);
  const [customHours, setCustomHours] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("2025-07-16");

  const handleBooking = (startIndex) => {
    const slotRange = formatSlotRange(startIndex, duration);
    if (slotRange && !bookedSlots.includes(slotRange)) {
      setBookedSlots([...bookedSlots, slotRange]);
    }
  };

  return (
    <div className="container">
      <h2>Select a Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <div className="duration-buttons">
        <button onClick={() => setDuration(1)}>1 Hour</button>
        <button onClick={() => setDuration(2)}>2 Hours</button>
        <button onClick={() => setDuration(parseInt(customHours || "1"))}>
          Custom
        </button>
        <input
          type="number"
          placeholder="Custom hrs"
          value={customHours}
          onChange={(e) => setCustomHours(e.target.value)}
          min={1}
          max={allSlots.length - 1}
        />
      </div>

      <h3>Available Slots for {selectedDate}</h3>
      <div className="slots">
        {allSlots.map((slot, i) => {
          const slotRange = formatSlotRange(i, duration);
          if (!slotRange) return null;

          const isBooked = bookedSlots.includes(slotRange);
          return (
            <button
              key={i}
              onClick={() => handleBooking(i)}
              className={isBooked ? "slot booked" : "slot available"}
              disabled={isBooked}
            >
              {slotRange}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
