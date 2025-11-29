import React from 'react';

import TopMenu from '../components/top-bar/topMenu';
import Footer from '../components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Inicio', link: '/', external: false },
  { name: 'Sobr Mí', link: '/sobremi', external: false },
  { name: 'ECS', link: 'https://www.estudiarconsentido.com/cangas-caldas', external: true },
  { name: 'Talleres', link: '/talleres', external: false },
  { name: 'Contacto', link: '/contacto', external: false },
];

export default function Layout() {
  const location = useLocation();
  const itemsWithActive = menuItems.map(item => ({
    ...item,
    active: !item.external && location.pathname === item.link
  }));
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu items={itemsWithActive} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
