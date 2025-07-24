const Navbar = ({ onSignUp }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold text-blue-700">Hari_Ram Turf</h1>
      <div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-4"
          onClick={onSignUp}
        >
          Sign Up
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
