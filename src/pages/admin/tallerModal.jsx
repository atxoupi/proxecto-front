import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from "react-icons/fa6";

import CustomButton from "../../components/button/index.jsx";
import TalleresForm from './talleresForm.jsx';

const TallerModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CustomButton
        children="Nuevo Taller"
        onClick={() => setShowModal(true)}
        icon={<FaPlus />}
      />

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }} 
              exit={{ x: "100%" }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex-1 overflow-auto">
                <TalleresForm closeModal={() => setShowModal(false)} />
              </div>

              <div className="pt-4 flex justify-end">
                <CustomButton
                  children="Cancelar"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TallerModal;
