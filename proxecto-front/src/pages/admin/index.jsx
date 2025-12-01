import React from "react";
import AnimatedCard from "../../components/card/index.jsx";
import CustomButton from "../../components/button/index.jsx";
import { useLogoutMutation } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { FaRightToBracket } from "react-icons/fa6";

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();

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
        title="Admin"
        text="Aquí puedes administrar el contenido de la página."
      />
      
    </div>
  );
};

export default AdminPage;
