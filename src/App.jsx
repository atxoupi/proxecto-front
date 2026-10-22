import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroHeader from "./components/heroReader/heroReader";
import MotionCarousel from "./components/motionCarousel/index.jsx";
import TallerCard from "./components/tallerCard/index.jsx";
import TallerDetalleModal from "./pages/talleres/tallerdetalleModal.jsx";
import { useGetTalleresQuery } from "./services/apiTalleres.jsx";
import { useGetCarouselQuery } from "./services/apiCarousel.jsx";

import mainpic from "./assets/main_page_pic1.jpg";
import photo1 from "./assets/Carousel/carousel_pic_1.jpg";
import photo2 from "./assets/Carousel/carousel_pic_2.jpg";
import photo3 from "./assets/Carousel/carousel_pic_3.jpg";
import photo4 from "./assets/Carousel/carousel_pic_4.jpg";

const staticCarousel = [photo1, photo2, photo3, photo4];

function App() {
  const { data: talleres } = useGetTalleresQuery();
  const { data: carouselData } = useGetCarouselQuery();
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  const carouselImages =
    carouselData && carouselData.length > 0
      ? carouselData.map((c) => c.image)
      : staticCarousel;

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
      <div className="min-h-screen w-full mt-20">
        <HeroHeader title="Cristina Núñez Touceda" imageUrl={mainpic} />

        <main className="w-[75vw] mx-auto flex flex-col gap-12 py-12">

          {/* Bienvenida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Bienvenida</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Soy Cris, terapeuta corporal y coach educativa. Acompaño a personas,
              estudiantes y familias en sus procesos de cambio hacia el bienestar,
              el aprendizaje y la autonomía.
            </p>
            <Link
              to="/sobremi"
              className="inline-block mt-6 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
            >
              Conoce más sobre mí
            </Link>
          </motion.div>

          {/* Carrusel */}
          <MotionCarousel images={carouselImages} />

          {/* Talleres cercanos */}
          {cercanos.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#d4af37] mb-6 text-center">
                Talleres
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="bg-[#d4af37] hover:bg-[#b5942f] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-200"
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
