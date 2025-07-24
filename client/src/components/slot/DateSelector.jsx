import React from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "./DateSelector.css";

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="date-picker-wrapper">
      <label className="label">SELECT A DATE</label>
      <div className="date-display-box">
        <div className="selected-date">
          <strong>{selectedDate ? format(selectedDate, "dd MMMM yyyy") : "No date selected"}</strong>
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd MMMM yyyy"
          className="hidden-datepicker"
          customInput={<CustomInput />}
        />
      </div>
    </div>
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <button className="calendar-icon" onClick={onClick} ref={ref}>
    📅
  </button>
));

export default DateSelector;