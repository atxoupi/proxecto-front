import React from "react";
import { motion } from "framer-motion";
import LoginPic from "../../assets/login_page_pic1.jpg";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundImage: `url(${LoginPic})` }}
      className="flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center bg-no-repeat rounded-tl-3xl rounded-tr-3xl p-4"
    >
      <h1 className="text-4xl text-[#d4af37] font-bold mb-8">Login</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button
          className="w-full bg-[#d4af37] font-semibold text-white p-2 rounded hover:bg-[#b5942f] transition-colors duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default LoginPage;
