import React from "react";
import AnimatedCard from "../../components/card/index.jsx";
import CustomButton from "../../components/button/index.jsx";
import TallerCard from "../../components/tallerCard/index.jsx";
import { useLogoutMutation } from "../../services/auth";
import { useGetTalleresQuery } from "../../services/apiTalleres.jsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { FaRightToBracket } from "react-icons/fa6";

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const { data: talleres, error, isLoading: isLoadingTalleres } = useGetTalleresQuery();

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      navigate("/login");
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center mt-20">
      <div className="flex justify-end mb-10">
        <CustomButton children="Logout" onClick={() => handleLogout()} icon={<FaRightToBracket />}>
        </CustomButton>
      </div>
      <AnimatedCard
        title="Edición"
        text="En esta sección puedes gestionar los talleres ofrecidos en la plataforma. Puedes crear nuevos talleres, actualizar la información de los existentes o eliminarlos si ya no son relevantes. Asegúrate de mantener la información actualizada para ofrecer la mejor experiencia a los usuarios."
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {isLoadingTalleres && <p>Cargando talleres...</p>}
        {error && <p>Error al cargar los talleres.</p>}
        {talleres && talleres.map((taller) => (
          <TallerCard
            key={taller.id}
            title={taller.name}
            text={taller.description}
            image={taller.image}
          />  
        ))}
        <TallerCard
            key={10}
            title="Probando Taller"
            text="Descripción de prueba"
            image="https://crisnuneztouceda.com/wp-content/uploads/2025/02/2.png"
          />
      </div>
    </div>
    
  );
};

export default AdminPage;
