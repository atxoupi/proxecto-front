import React from 'react';
import AnimatedCard from '../../components/card/index.jsx';

const AdminPage = () => {
  return (
          <div className="w-full flex justify-center mt-20">
              <AnimatedCard
                  title="Admin"
                  text="Aquí puedes administrar el contenido de la página."
              />
          </div>
      );
};

export default AdminPage;