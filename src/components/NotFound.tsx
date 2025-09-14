import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../animations/404.json";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-100 h-100"
        />
      </motion.div>

      <motion.p
        className="mt-4 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          to="/"
          className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 sm:from-gray-600 sm:to-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 flex items-center justify-center"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
