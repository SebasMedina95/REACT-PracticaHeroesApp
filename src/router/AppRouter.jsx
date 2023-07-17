import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


// Este router estará representando el routing del login
export const AppRouter = () => {
  return (
    <>

      <Routes>

        {/* Esta es la ruta que requiero proteger, es la que tiene las rutas públicas */}
        <Route path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />


        {/* Esta es la ruta que requiero proteger, es la que tiene las rutas privadas */}
        <Route path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>

    </>
  )
}
