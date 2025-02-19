
import { motion } from "framer-motion";

export const StatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            4,577+ leads found and counting!
          </h2>
          <p className="mt-2 text-blue-100">
            Discover potential customers actively discussing their needs
          </p>
        </motion.div>
      </div>
    </div>
  );
};
