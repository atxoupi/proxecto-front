import React from "react";
import { motion } from "framer-motion";



import ECSPIC from "../../assets/ecs_page_pic1.jpg";

const EcsPage = () => {
  const [open, setOpen] = React.useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-[75vw] min-h-[70vh] bg-white rounded-2xl shadow-md p-8 mt-20 mx-auto flex flex-col md:flex-row items-center gap-8"
    >
      <div className="md:basis-[50%] w-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold mb-6 text-[#d4af37]"
        >
          Estudiar con Sentido
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gray-700 text-lg"
        >
          Acompaño a estudiantes de todas las edades,
          ofreciendo recursos prácticos y personalizados con el objetivo de
          optimizar el proceso de estudio, mejorar la motivación, conseguir
          mayor autonomía y productividad y alcanzar así mejores resultados.
          <br />
          <br />
          Estudiar con Sentido es un programa personalizado, con una estructura
          que se adapta a cada estudiante y sus circunstancias, por eso trabajamos
          en sesiones individuales de una hora a la semana.
          <br />
          <br />
          Seguimos 3 áreas de trabajo:
          <div className="mt-6 space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(1)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#f0d87d] hover:bg-[#e6c96f] transition font-semibold text-gray-400"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{open === 1 ? "−" : "+"}</span>
                  Planificación
                </span>
              </button>

              {open === 1 && (
                <div className="px-6 py-4 text-gray-700 text-sm bg-white">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Organiza o teu tempo e as túas actividades</li>
                    <li>Mellora a túa concentración e productividade</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(2)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#f0d87d] hover:bg-[#e6c96f] transition font-semibold text-gray-400"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{open === 2 ? "−" : "+"}</span>
                  Contenidos
                </span>
              </button>

              {open === 2 && (
                <div className="px-6 py-4 text-gray-700 text-sm bg-white">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Estrategias activas de estudio</li>
                    <li>Aprendizaje significativo</li>
                    <li>Repasa poco y recuerda mejor</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(3)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#f0d87d] hover:bg-[#e6c96f] transition font-semibold text-gray-400"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{open === 3 ? "−" : "+"}</span>
                  Motivación
                </span>
              </button>

              {open === 3 && (
                <div className="px-6 py-4 text-gray-700 text-sm bg-white">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>
                      Siéntete orgulloso de tu trabajo sin depender de otras
                      personas
                    </li>
                    <li>
                      La gestión emocional está presente durante todo el proceso
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button
          onClick={() => window.open('https://www.estudiarconsentido.com', '_blank')}
        className="mt-4 bg-[#d4af37] font-semibold text-white p-2 rounded hover:bg-[#b5942f] transition-colors duration-200 flex items-center justify-center gap-2 w-full"
      >
        Saber más ...
      </button>
        </motion.p>
      </div>
      <motion.img
        src={ECSPIC}
        alt="Estudiar con Sentido"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="md:basis-[50%] w-full 
           h-[220px] md:h-[500px] 
           object-contain md:object-cover 
           object-center 
           rounded-xl shadow-lg"
      />
    </motion.div>
  );
};

export default EcsPage;
