# proxecto-front

Frontend SPA del proyecto **Coaching DAW** — interfaz web para gestión de talleres de coaching.

Producción: [https://coaching.daw.iesrodeira.com](https://coaching.daw.iesrodeira.com)

## Stack

| Tecnología | Versión |
|---|---|
| React | 19 |
| Vite | 7 |
| React Router | v7 |
| Redux Toolkit + RTK Query | 2 |
| Tailwind CSS | v4 |
| Framer Motion | 12 |

## Requisitos

- Node.js 20+
- npm
- Backend Django corriendo en `http://localhost:8000` (para desarrollo)

## Instalación

```bash
npm install
```

## Comandos

```bash
npm run dev       # Servidor de desarrollo con HMR (proxy /api → localhost:8000)
npm run build     # Build de producción en dist/
npm run preview   # Previsualizar el build de producción localmente
npm run lint      # Linting con ESLint
```

## Variables de entorno

| Archivo | Uso |
|---|---|
| `.env` | Desarrollo — apunta a `http://localhost:8000` |
| `.env.production` | Producción — usa rutas relativas `/api` |

Variables clave consumidas por Vite:

```
VITE_API_AUTH_URL=http://localhost:8000/api/auth
VITE_API_TALLERES_URL=http://localhost:8000/api/talleres
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/sobremi` | Sobre mí |
| `/talleres` | Listado de talleres |
| `/ecs` | ECS |
| `/contacto` | Formulario de contacto |
| `/login` | Inicio de sesión |
| `/admin` | Panel de administración (protegida) |
| `/aviso-legal` | Aviso legal |
| `/privacidad` | Política de privacidad |
| `/cookies` | Política de cookies |

La ruta `/admin` está protegida por `ProtectedRoute`, que usa `useMeQuery()` para verificar sesión y redirige a `/login` si no hay usuario autenticado.

## Arquitectura

```
src/
├── app/           # Redux store y hooks tipados
├── features/auth/ # Slice de autenticación
├── services/      # RTK Query (authApi, tallerApi, apiCarousel)
├── pages/         # Un directorio por ruta
├── components/    # Componentes reutilizables
└── layout/        # Layout principal (TopMenu + Footer + Outlet)
```

**API layer:** dos servicios RTK Query:
- `authApi` — `POST /login`, `POST /logout`, `GET /me`
- `tallerApi` — CRUD completo de talleres + upload de imágenes en `POST /upload/`

Ambos leen el CSRF token de `document.cookie` y envían `credentials: 'include'`.

**Autenticación:** basada en cookies de sesión. Django establece `sessionid` + `csrftoken`; el frontend lee el token CSRF de la cookie y lo envía como cabecera en peticiones mutantes.

## Docker / Producción

Build multi-etapa: Node 20 Alpine (build) → Nginx Alpine (runtime).

`nginx.conf` sirve la SPA con fallback `try_files → /index.html`, hace proxy de `/api/` al servicio `backend` y permite cuerpos de petición de hasta 50 MB (para subida de imágenes).

```bash
# Desde el directorio raíz del monorepo
docker compose up -d --build
```

## Convenciones

- Todo el texto de la UI está en español.
- Color de marca: dorado (`#d4af37`), definido como color personalizado de Tailwind.
- Animaciones de entrada con Framer Motion en tarjetas y componentes de página.
- Solo hooks — sin componentes de clase.
- ESLint permite variables no usadas que empiezan por mayúscula (imports de componentes).
