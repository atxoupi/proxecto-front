import React from 'react';

import TopMenu from '../components/top-bar/topMenu';
import Footer from '../components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Inicio', link: '/', external: false },
  { name: 'Sobre Mí', link: '/sobremi', external: false },
  { name: 'Programas Educativos', link: '/ecs', external: false },
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
