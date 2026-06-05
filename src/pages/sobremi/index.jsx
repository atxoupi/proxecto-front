import { motion } from 'framer-motion';
import aboutMePic from '../../assets/about_me_pic1.jpg';

const bloques = [
  {
    icono: '📚',
    titulo: 'Acompañamiento educativo',
    texto:
      'Acompaño a niños, adolescentes y opositores en sus procesos de aprendizaje desde una mirada integral y respetuosa. A través del programa Estudiar con Sentido, ayudo a transformar la experiencia de estudio en un proceso consciente, motivador y alineado con las necesidades reales de cada estudiante.',
  },
  {
    icono: '👨‍👩‍👧',
    titulo: 'Familias y cuidadores',
    texto:
      'También acompaño a familias y cuidadores que desean educar desde el respeto, fomentando la autonomía y la comunicación.',
  },
  {
    icono: '🌿',
    titulo: 'Cuerpo, movimiento y juego',
    texto:
      'Como facilitadora del Sistema Ludocorporal (Juego Corporal Expresivo y Meditación de la Risa) y Terapia Corporal Evolutiva, integro el cuerpo, el movimiento y el juego como herramientas fundamentales para el autoconocimiento, la regulación emocional y el bienestar.',
  },
];

const Sobremi = () => {
  return (
    <div className="w-full min-h-screen mt-20 pb-16">

      {/* Hero con foto */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6"
      >
        <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 md:h-[28rem] bg-gray-100">
          <img
            src={aboutMePic}
            alt="Cristina Núñez Touceda"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col items-center justify-end px-4 pb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg"
            >
              Sobre mí
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[#d4af37] text-lg sm:text-xl font-medium mt-1 drop-shadow"
            >
              Cristina Núñez Touceda
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-3xl mx-auto text-center px-6 py-10"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          Acompaño personas en sus procesos de cambio y aprendizaje desde una mirada
          integral, respetuosa y centrada en cada individuo. Mi trabajo une el
          acompañamiento educativo, el trabajo con familias y la terapia corporal.
        </p>
      </motion.div>

      {/* Tres bloques */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {bloques.map((bloque, i) => (
          <motion.div
            key={bloque.titulo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
          >
            <span className="text-5xl mb-4">{bloque.icono}</span>
            <h2 className="text-lg font-bold text-[#d4af37] mb-4">
              {bloque.titulo}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {bloque.texto}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Sobremi;
