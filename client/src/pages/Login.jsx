import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };
    if (!username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Logging in user', { username, password });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
        onSubmit={loginUser}
      >
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`block w-full rounded-lg border p-2.5 text-sm ${
              errors.username
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-500">{errors.username}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`block w-full rounded-lg border p-2.5 text-sm ${
                errors.password
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
          )}
        </div>
        <button
          className="w-full rounded-lg bg-blue-500 py-2.5 text-white font-bold hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
        <div className="flex items-center justify-between text-sm">
          <p className="">New to FindMyNotes?</p>
          <Link to="/signup">
            <p className="font-bold">Create an account</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
