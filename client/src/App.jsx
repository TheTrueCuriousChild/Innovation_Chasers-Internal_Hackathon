import { useEffect } from 'react';
import './App.css';
import BookNow from './components/BookNow';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* Other sections like navbar, banner etc. can go here */}

      <section className="book-now" data-aos="fade-up">
        <div className="book-now-content">
          <h2 className="section-title">Book Your Turf Now</h2>
          <BookNow />
        </div>
      </section>

      {/* Any other components after this */}
    </div>
  );
}

export default App;
