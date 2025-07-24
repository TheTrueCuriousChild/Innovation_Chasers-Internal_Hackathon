// client/src/pages/Signup.jsx

import { useState } from 'react';
import './SignUp.css';

function SignUp({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('❌ Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name: email.split('@')[0], // Extracts name from email prefix
          role: 'user', // You can change this to 'admin' where needed
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Signup successful!');
        onClose(); // Close modal or redirect
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error('Signup failed:', err);
      alert('⚠️ Server error. Try again later.');
    }
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="signUpContainer" onClick={(e) => e.stopPropagation()}>
        <h2>Sign Up</h2>
        <form className="signUpForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <button onClick={onClose} className="closeModalButton">Close</button>
      </div>
    </div>
  );
}

export default SignUp;
