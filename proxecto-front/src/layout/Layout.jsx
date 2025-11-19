import React from 'react';
import TopMenu from '../components/top-bar/topMenu';
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
    <>
      <TopMenu items={itemsWithActive} />
      <div style={{ paddingTop: '75px' }}>
        <Outlet />
      </div>
    </>
  );
}
