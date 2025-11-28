import HeroHeader from "./components/heroReader/heroReader";
import AnimatedCard from "./components/card";
import mainpic from "./assets/main_page_pic1.jpg";

function App() {
  

  return (
    <>
      <div className="App min-h-screen w-full mt-1">
        <HeroHeader title="Cristina Nuñez Touceda" imageUrl={mainpic} />
        <main className="flex justify-center mt-0">
           <AnimatedCard
          title="Bienvenid@ a mi página web"
          text="¡Hola! Soy Cris, terapeuta corporal que acompaña a personas en sus procesos de cambio para conseguir nuevos objetivos o mejorar su bienestar. Sensible con las dificultades que se producen en las familias a causa de los estudios, ofrezco apoyo emocional y orientación a estudiantes y sus familias para afrontar estos retos de manera saludable y efectiva."
        />
        </main>
      </div>
    </>
  );
}

export default App;