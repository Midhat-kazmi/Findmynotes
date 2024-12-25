import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [profilePreviewImage, setProfilePreviewImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userBio", userBio);
      formData.append("userEmail", userEmail);
      formData.append("userMobile", userMobile);
      formData.append("userName", userName);
      formData.append("userPassword", userPassword);
      formData.append("profileImage", profileImage);

      const result = await axios.post(
        "http://localhost:6969/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data: ", result);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Failed to register user: ", error);
      alert("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <form
        className="w-full max-w-lg flex flex-col gap-4 bg-white p-6 shadow-lg rounded-lg"
        onSubmit={registerUser}
      >
        <h1 className="text-2xl font-bold text-gray-800">Register</h1>

        {/* First and Last Name */}
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold text-gray-700" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-semibold text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700" htmlFor="userBio">
            Bio
          </label>
          <textarea
            id="userBio"
            rows="3"
            placeholder="Tell us something about yourself"
            className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUserBio(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700" htmlFor="userEmail">
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            placeholder="your.email@example.com"
            className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700" htmlFor="userMobile">
            Mobile Number
          </label>
          <input
            type="tel"
            id="userMobile"
            placeholder="0000000000"
            className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUserMobile(e.target.value)}
          />
        </div>

        {/* Username */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700" htmlFor="userName">
            Username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="johndoe123"
            className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700" htmlFor="userPassword">
            Password
          </label>
          <input
            type="password"
            id="userPassword"
            placeholder="*********"
            className="rounded-lg border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50">
            {profilePreviewImage ? (
              <img
                src={profilePreviewImage}
                alt="Profile Preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-gray-500">Profile Image</span>
            )}
          </div>
          <label
            htmlFor="profileImage"
            className="cursor-pointer text-blue-500 underline"
          >
            Upload Profile Picture
            <input
              type="file"
              id="profileImage"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                setProfilePreviewImage(
                  URL.createObjectURL(e.target.files[0])
                );
                setProfileImage(e.target.files[0]);
              }}
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-5 py-2 font-bold text-white hover:bg-blue-600"
        >
          Register
        </button>

        {/* Login Link */}
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
