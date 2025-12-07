import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
    initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-[75vw] mx-auto bg-white text-gray-700 py-4 mt-auto border-t border-gray-300 rounded-t-2xl shadow-lg ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Cristina Núñez Touceda · Diseño & desarrollo: Andrés Hermelo
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a
            href="https://www.instagram.com/crisnuneztouceda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.24 3.5 3.5 5.24 3.5 7.75v8.5c0 2.51 1.74 4.25 4.25 4.25h8.5c2.51 0 4.25-1.74 4.25-4.25v-8.5c0-2.51-1.74-4.25-4.25-4.25h-8.5zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm5.25-.88a1.13 1.13 0 1 1-1.13-1.12 1.13 1.13 0 0 1 1.13 1.12z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/cristina.nuneztouceda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.413c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.314h3.59l-.467 3.696h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/crisnuneztouceda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0 text-xs">
          <a href="/aviso-legal" className="hover:underline">
            Aviso legal
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/privacidad" className="hover:underline">
            Política de privacidad
          </a>
          <span className="hidden md:inline">|</span>
          <a href="/cookies" className="hover:underline">
            Política de cookies
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
