import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from "react-icons/fa6";

import CustomButton from "../../components/button/index.jsx";
import TalleresForm from './talleresForm.jsx';

const TallerModal = ({ taller, isOpen: isOpenProp, onClose }) => {
  const [isOpenLocal, setIsOpenLocal] = useState(false);

  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenLocal;

  const handleClose = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setIsOpenLocal(false);
    }
  };

  return (
    <>
      {!isControlled && (
        <CustomButton
          onClick={() => setIsOpenLocal(true)}
          icon={<FaPlus />}
        >
          Nuevo Taller
        </CustomButton>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex-1 overflow-auto">
                <TalleresForm closeModal={handleClose} taller={taller} />
              </div>
              <div className="pt-4 flex justify-end">
                <CustomButton onClick={handleClose}>
                  Cancelar
                </CustomButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TallerModal;
