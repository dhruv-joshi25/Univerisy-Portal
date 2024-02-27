import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"
    >
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 max-w-sm shadow-xl p-6 rounded bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded bg-white text-gray-800"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-white text-gray-800"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-white hover:text-gray-200 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-white hover:text-gray-200 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-white hover:bg-gray-200 px-4 py-2 text-gray-800 uppercase rounded text-xs tracking-wider text-gray-800 font-semibold"
            type="submit"
          >
            Login
          </motion.button>
        </div>
        <div className="mt-4 font-semibold text-sm text-white text-center md:text-left">
          Don't have an account?{" "}
          <a
            className="text-red-300 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </a>
        </div>

        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-white after:mt-0.5 after:flex-1 after:border-t after:border-white">
          <p className="mx-4 mb-0 text-center font-semibold text-white">Or</p>
        </div>
        <div className="flex justify-center text-center md:text-left">
          <label className="mr-1 text-white">Sign in with</label>

          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-white hover:bg-gray-200 text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoFacebook size={20} className="w-full" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-white hover:bg-gray-200 uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiOutlineTwitter size={20} className="w-full" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Login;
