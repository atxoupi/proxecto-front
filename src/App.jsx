import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroHeader from "./components/heroReader/heroReader";
import AnimatedCard from "./components/card";
import MotionCarousel from "./components/motionCarousel/index.jsx";
import TallerCard from "./components/tallerCard/index.jsx";
import TallerDetalleModal from "./pages/talleres/tallerdetalleModal.jsx";
import { useGetTalleresQuery } from "./services/apiTalleres.jsx";

import mainpic from "./assets/main_page_pic1.jpg";
import photo1 from "./assets/Carousel/carousel_pic_1.jpg";
import photo2 from "./assets/Carousel/carousel_pic_2.jpg";
import photo3 from "./assets/Carousel/carousel_pic_3.jpg";
import photo4 from "./assets/Carousel/carousel_pic_4.jpg";

function App() {
  const { data: talleres } = useGetTalleresQuery();
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cercanos = talleres
    ? [...talleres]
        .filter((t) => t.date)
        .sort((a, b) => {
          const toDate = (str) => { const [y, m, d] = str.split('-').map(Number); return new Date(y, m - 1, d); };
          return Math.abs(toDate(a.date) - today) - Math.abs(toDate(b.date) - today);
        })
        .slice(0, 3)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
    : [];

  return (
    <>
      <div className="App min-h-screen w-full mt-1">
        <HeroHeader title="Cristina Núñez Touceda" imageUrl={mainpic} />
        <main className="w-full flex flex-col items-center px-4 space-y-12 mb-8">
          <div className="w-[75vw] mx-auto">
            <AnimatedCard
              title="Bienvenida!!"
              text={<>Soy Cris, terapeuta corporal y coach educativa, acompaño a personas en sus procesos de cambio para conseguir nuevos objetivos o mejorar su bienestar.<br /> <br />
          Mi enfoque integra diversas disciplinas y técnicas, adaptándolas a las necesidades individuales de cada persona. Trabajo con herramientas como la terapia corporal evolutiva (TCE), la respiración consciente, el movimiento corporal y meditación de la risa.<br /> <br />
              Sensible con las dificultades que se producen en las familias a causa de los estudios, ofrezco apoyo emocional y orientación a estudiantes y sus familias para afrontar estos retos de manera saludable y efectiva.</>}
            />
          </div>

          <MotionCarousel images={[photo1, photo2, photo3, photo4]} />

          {cercanos.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6 text-center">
                Talleres
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                {cercanos.map((taller) => (
                  <div
                    key={taller.id}
                    onClick={() => setTallerSeleccionado(taller)}
                    className="cursor-pointer flex justify-center"
                  >
                    <TallerCard
                      title={taller.name}
                      text={taller.description}
                      image={taller.image}
                      date={taller.date}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Link
                  to="/talleres"
                  className="bg-[#d4af37] hover:bg-[#b5942f] text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
                >
                  Ver todos los talleres
                </Link>
              </div>
            </motion.section>
          )}
        </main>
      </div>

      {tallerSeleccionado && (
        <TallerDetalleModal
          taller={tallerSeleccionado}
          onClose={() => setTallerSeleccionado(null)}
        />
      )}
    </>
  );
}

export default App;
