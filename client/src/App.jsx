import NavBar from './navBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
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
        <div>
        <SignUp />
        <p>Welcome to the Sign Up page!</p>
      </div>
      </div>

      <Footer />
    </div>
  
  );
}

export default App;
