import React, { useState } from "react";
import loginImage from "../assets/images/login.png";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex min-h-screen h-[100vh] flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full h-full md:w-1/2 DEFAULT text-white flex items-center justify-center ">
        <img
          className="h-full w-full object-fill "
          src={loginImage}
          alt="login"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center  p-4 md:p-0 bg-gradient-to-tr from-primary to-white">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg shadow-yellowGlow">
          <h2 className="text-2xl font-semibold text-center text-primary-dark mb-6 font-sans">
            Login
          </h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary-dark mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-neutral DEFAULT rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-primary-dark mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 border border-neutral DEFAULT rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-primary-dark"
                >
                  {/* {passwordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-3.925 0-7.425-2.15-9.525-5.375a10.03 10.03 0 0116.938-5.204M15 12l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12c2.5-3.5 6-6 9-6s6.5 2.5 9 6c-2.5 3.5-6 6-9 6s-6.5-2.5-9-6z"
                      />
                    </svg>
                  )} */}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full py-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
