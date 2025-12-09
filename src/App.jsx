import { motion } from "framer-motion";

import HeroHeader from "./components/heroReader/heroReader";
import AnimatedCard from "./components/card";
import MotionCarousel from "./components/motionCarousel/index.jsx";

import mainpic from "./assets/main_page_pic1.jpg";
import photo1 from "./assets/Carousel/carousel_pic_1.jpg";
import photo2 from "./assets/Carousel/carousel_pic_2.jpg";
import photo3 from "./assets/Carousel/carousel_pic_3.jpg";
import photo4 from "./assets/Carousel/carousel_pic_4.jpg";

function App() {
  return (
    <>
      <div className="App min-h-screen w-full mt-1">
        <HeroHeader title="Cristina Núñez Touceda" imageUrl={mainpic} />
        <main className="w-full flex flex-col items-center  px-4 space-y-12 mb-8">
          <div className="w-[75vw] mx-auto">
            <AnimatedCard
              title="Bienvenida!!"
              text={<>Soy Cris, terapeuta corporal y coach educativa, acompaño a personas en sus procesos de cambio para conseguir nuevos objetivos o mejorar su bienestar.<br /> <br />
          Mi enfoque integra diversas disciplinas y técnicas, adaptándolas a las necesidades individuales de cada persona. Trabajo con herramientas como la terapia corporal evolutiva(Tce), la respiración consciente, el movimiento corporal y meditación de la risa.<br /> <br />
              Sensible con las dificultades que se producen en las familias a causa de los estudios, ofrezco apoyo emocional y orientación a estudiantes y sus familias para afrontar estos retos de manera saludable y efectiva.</>}
            />
          </div>
          <MotionCarousel images={[photo1, photo2, photo3, photo4]} />
        </main>
      </div>
    </>
  );
}

export default App;
