
import React, { useState } from 'react';
import TopMenuItem from './topMenuItem';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo1.svg';

const TopMenu = ({ items }) => {
	const [open, setOpen] = useState(false);

		return (
			<motion.div 
                className="w-full flex justify-center fixed top-0 left-0 z-50 bg-transparent" 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.5 }}
                exit={{opacity: 0}}
            >
		   <nav className="bg-white border-b border-gray-200 w-[75vw] rounded-b-xl shadow-md">
			   <div className="px-4 sm:px-6 lg:px-8">
				   <div className="flex justify-between h-16 items-center w-full">
						<div className="flex-shrink-0"><img src={Logo} alt="Logo" className="h-18 w-22" /></div>
						<div className="hidden md:flex">
							<ul className="flex space-x-2">
								{items.map((item) => (
									<TopMenuItem key={item.name} {...item} />
								))}
							</ul>
						</div>
						<div className="md:hidden">
							<button
								onClick={() => setOpen(!open)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
								aria-label="Abrir menú"
							>
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
				{/* Menú móvil */}
				{open && (
					<div className="md:hidden px-2 pb-3">
						<ul className="space-y-1">
							{items.map((item) => (
								<TopMenuItem key={item.name} {...item} />
							))}
						</ul>
					</div>
				)}
			</nav>
            </motion.div>
		);
};

export default TopMenu;
