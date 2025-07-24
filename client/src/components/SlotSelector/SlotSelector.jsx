import React, { useState } from "react";
import DateSelector from "./DateSelector";
import { format } from "date-fns";
import "./SlotSelector.css";

const formatTime = (hour) => {
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${String(hour12).padStart(2, "0")}:00 ${period}`;
};

const generateSlots = (start, end, duration) => {
  const slots = [];
  for (let hour = start; hour + duration <= end; hour++) {
    const startTime = formatTime(hour);
    const endTime = formatTime(hour + duration);
    slots.push(`${startTime} - ${endTime}`);
  }
  return slots;
};

export default function SlotSelector() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHours, setSelectedHours] = useState(1);
  const [customHour, setCustomHour] = useState(1);
  const [useCustom, setUseCustom] = useState(false);

  const maxHour = 18;
  const minHour = 8;
  const slots = generateSlots(minHour, maxHour, selectedHours);

  return (
    <div className="slot-selector-container">
      <h2>Select a Date</h2>
      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <h3>Select Booking Duration</h3>
      <div className="duration-controls">
        <button onClick={() => { setSelectedHours(1); setUseCustom(false); }} className="button1">1 Hr</button>
        <button onClick={() => { setSelectedHours(2); setUseCustom(false); }} className="button1">2 Hr</button>
        <button onClick={() => setUseCustom(true)} className="button1">Custom</button>

        {useCustom && (
          <input
            type="number"
            min="1"
            max={maxHour - minHour}
            value={customHour}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxHour - minHour);
              setCustomHour(value);
              setSelectedHours(value);
            }}
            className="custom-hour-input"
          />
        )}
      </div>

      <h3>Available Time Slots for {format(selectedDate, "EEE MMM dd yyyy")} ({selectedHours} Hr)</h3>
      <div className="slots-container">
        {slots.map((slot, index) => (
          <button key={index} className="slot-button">
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}
