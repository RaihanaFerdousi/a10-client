import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Firebase/AuthContext";
import logo from '../../assets/images/logo.webp'

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login"); 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="bg-base-100 sticky top-0 my-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black flex items-center gap-3"><img className="w-10 rounded-full" src={logo} alt="" /> Reelify</span>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/allMovies", label: "All Movies" },
            { to: "/addMovies", label: "Add Movies" },
            { to: "/myFavorites", label: "My Favorites" },
            { to: "/ourTeam", label: "Our Team" },
            { to: "/aboutUs", label: "About Us" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `hover:text-sky-800 transition ${
                    isActive ? "text-gray-800 font-semibold" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Profile"
                className="w-8 h-8 rounded-full border"
              />
              <span className="text-lg font-medium">{user.displayName || "User"}</span>
              <button
                className="btn bg-black text-white px-4 py-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn bg-black text-white px-4 py-2">
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow-md border-t">
          <ul className="flex flex-col items-start gap-4 p-4 text-gray-700">
            {[
              { to: "/", label: "Home" },
              { to: "/allMovies", label: "All Movies" },
              { to: "/addMovies", label: "Add Movies" },
              { to: "/myFavorites", label: "My Favorites" },
              { to: "/ourTeam", label: "Our Team" },
              { to: "/aboutUs", label: "About Us" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="hover:text-sky-800 transition" onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-4 border-t flex items-center">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full border"
                />
                <span className="text-lg font-medium">{user.displayName || "User"}</span>
                <button className="btn bg-black text-white w-full" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 w-full">
                <NavLink to="/login" className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 w-full text-center" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn bg-black text-white w-full text-center" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
