
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente para un ítem del menú superior.
 * Props:
 * - name: string (nombre a mostrar)
 * - link: string (URL de destino)
 * - active: boolean (si está activo o no)
 */
const TopMenuItem = ({ name, link, active }) => {
    return (
        <li>
            <Link
                to={link}
                className={`block px-4 py-2 rounded transition-colors duration-200 text-sm md:text-base 
                    ${active ? 'bg-gray-400 text-white' : 'text-gray-700 hover:bg-gray-200'}
                `}
            >
                {name}
            </Link>
        </li>
    );
};

export default TopMenuItem;