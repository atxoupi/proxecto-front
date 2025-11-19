import React from 'react';
import { motion } from 'framer-motion';

const Sobremi = () => {
    return (
        <div className="w-full flex justify-center mt-0">
            <motion.div
                className="bg-white rounded-xl shadow-md mt-0 p-6 w-[75vw]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <h1 className="text-2xl font-bold mb-2">Sobre Mí</h1>
                <p>Esta es la página sobre mí.</p>
            </motion.div>
        </div>
    );
};

export default Sobremi;