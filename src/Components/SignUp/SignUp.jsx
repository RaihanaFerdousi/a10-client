import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Firebase/AuthContext";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup, googleSignUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setErrorMessage("");

    if (!terms) {
      setErrorMessage("Please accept the terms and conditions.");
      return;
    }

    try {
      await signup(name, email, password);
      navigate("/"); // Redirect after successful sign-up
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await googleSignUp();
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-base-100 mx-auto py-7 flex flex-col mb-20 mt-10 w-[410px] shrink-0 shadow-2xl">
      <h3 className="text-3xl ml-4 pl-5 font-bold">Sign Up now!</h3>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label"><span className="label-text">Name</span></label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label"><span className="label-text">Password</span></label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="form-control">
          <label className="label justify-start cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox" />
            <span className="label-text ml-2">Accept Terms and Conditions</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white hover:text-gray-400">Sign Up</button>
        </div>
      </form>
      <h2 className="text-center font-bold mt-6">or</h2>
      <div className="mt-4 text-center">
        <button className="btn text-black mb-4 py-2 px-[85px] rounded-lg shadow-lg disabled:opacity-50 transition ease-in-out duration-300" onClick={handleGoogleSignUp}>
          <FcGoogle /> Sign Up with Google
        </button>
      </div>
      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
      <p className="m-2 pl-5">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
