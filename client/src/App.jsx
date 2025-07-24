import { useState } from 'react';
import Navbar from './navBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="bg-[#fffaf0] min-h-screen text-center">
      <Navbar onSignUp={() => setShowSignUp(true)} />
      <HeroSection />
      <Features />
      <Footer />
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
}

export default App;
