import React from "react";
import turf2 from './turf_img2.jpeg';
import turf3 from './turf_img3.jpeg';
import turf4 from './turf_img4.jpeg';
import turf5 from './turf_img5.jpg';
import turf6 from './turf_img6.jpg';
import './images.css';

// ✅ Combine each image with its name/location
const turfData = [
  { src: turf2, name: "Riyan Turf" },
  { src: turf3, name: "Kalyan Sports Foundation" },
  { src: turf4, name: "Urban Sports" },
  { src: turf5, name: "The Playtime Turf" },
  { src: turf6, name: "Sportinglions Sports Turf" }
];

export default function Middle() {
  return (
    <div className="turf-gallery">
      <h2 className="turf-title">Explore Our Turfs</h2>
      <div className="turf-grid">
        {turfData.map((turf, index) => (
          <div key={index} className="turf-card">
            <img src={turf.src} alt={turf.name} className="turf-image" />
            <p className="turf-location">📍 {turf.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}