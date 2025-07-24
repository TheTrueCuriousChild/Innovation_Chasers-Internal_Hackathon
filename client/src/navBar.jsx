import './NavBar.css';

function NavBar({ onToggleMode, onSignInClick, onSignUpClick }) {
  return (
    <nav>
      <div className="navBar">
        <ul className="navBarUL">
          <div className="navGroupLeft">
            <li className="navBarList">logo</li>
            <li className="navBarList"><button>Home</button></li>
            <li className="navBarList"><button>Price</button></li>
            <li className="navBarList"><button>Locations</button></li>
            <li className="navBarList"><button>Contact</button></li>
          </div>
          <div className="navGroupRight">
            <li className="navBarList"><button onClick={onToggleMode}>Mode</button></li>
            <li className="navBarList"><button onClick={onSignInClick}>Sign In</button></li>
            <li className="navBarList"><button onClick={onSignUpClick}>Sign Up</button></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;