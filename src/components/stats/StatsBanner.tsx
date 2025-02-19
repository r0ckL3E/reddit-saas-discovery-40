
import { motion } from "framer-motion";

export const StatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            4,577+ leads found and counting!
          </h2>
          <p className="mt-3 text-blue-100 text-lg">
            Discover potential customers actively discussing their needs
          </p>
        </motion.div>
      </div>
    </div>
  );
};
