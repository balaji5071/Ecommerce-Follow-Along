import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="box-border flex flex-col bg-slate-200 p-6 shadow-xl rounded-xl w-96">
        <h1 className="text-center text-2xl font-bold mb-5">User Login</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative flex items-center mb-4">
            <IoMailSharp className="absolute left-3 text-gray-500" />
            <input
              type="email"
              required
              autoComplete="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center mb-4">
            <input
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className=' flex justify-self-start m-2'>
            <input type="checkbox" value='Remember' name='Remember' />
            <a href="" className="ml-40 text-red-600">Password Forgoted</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
