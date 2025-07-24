import { useState } from 'react';
import './SignIn.css';

function SignIn({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="signInContainer" onClick={(e) => e.stopPropagation()}>
        <h2>Sign In</h2>
        <form className="signInForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
        <button onClick={onClose} className="closeModalButton">Close</button>
      </div>
    </div>
  );
}

export default SignIn;