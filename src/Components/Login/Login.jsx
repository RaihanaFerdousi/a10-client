import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Firebase/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { login, googleSignUp } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        if (!email || !password) {
            setErrorMessage("Email and password are required.");
            setIsLoading(false);
            return;
        }

        try {
            await login(email, password);
            console.log("Logged in successfully");
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            console.error("Login error:", error.message);
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            await googleSignUp();
            console.log("Logged in with Google");
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            console.error("Google login error:", error.message);
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-base-100 mx-auto w-[400px] mb-20 mt-10 p-5 flex flex-col shrink-0 shadow-2xl">
            <h3 className="text-3xl ml-4 font-bold pl-5">Login</h3>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="input input-bordered"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-xs absolute right-2 top-12"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-black" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
            <h2 className="text-center font-bold">or</h2>
            <div className="mt-4 text-center">
                <button
                    className="btn text-black w-[310px] mb-4 py-2 px-[85px] rounded-lg shadow-lg disabled:opacity-50 transition ease-in-out duration-300"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                >
                    <FcGoogle /> Login with Google
                </button>
            </div>
            {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
            <p className="m-2 pl-5">
                Don't have an account? <NavLink to="/signUp">Sign Up</NavLink>
            </p>
        </div>
    );
};

export default Login;
