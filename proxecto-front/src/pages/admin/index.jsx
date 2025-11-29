import React from "react";
import AnimatedCard from "../../components/card/index.jsx";
import axios from "axios";
import CustomButton from "../../components/button/index.jsx";
import { FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const csrftoken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken"))
        ?.split("=")[1];

      await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": csrftoken,
          },
        }
      );
      localStorage.removeItem("sessionid");
      localStorage.removeItem("token");
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
