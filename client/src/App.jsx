import NavBar from './navBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <NavBar onToggleMode={toggleMode} />

      <div className="pageContent">
        {/* Main page content here */}
        <p>Hello</p>
        <SignIn />
      </div>

      <Footer />
    </div>
  );
}

export default App;
