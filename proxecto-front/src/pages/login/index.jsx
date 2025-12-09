import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginPic from "../../assets/login_page_pic1.jpg";
import { useNavigate } from "react-router-dom";
import { authApi, useLoginMutation } from "../../services/auth";
import { useAppDispatch } from "../../app/hooks";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await login({ email, password }).unwrap();

      console.log("Login correcto:", res);
      navigate("/admin");
    } catch (error) {
      console.error(error);
      setErrorMsg("Credenciales incorrectas ou erro no servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundImage: `url(${LoginPic})` }}
      className="flex flex-col items-center justify-center min-h-screen w-screen bg-cover bg-center bg-no-repeat rounded-tl-3xl rounded-tr-3xl p-4"
    >
      <h1 className="text-4xl text-[#d4af37] font-bold mb-8">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        {errorMsg && (
          <p className="bg-red-100 text-red-600 p-2 rounded text-center mb-3">
            {errorMsg}
          </p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
