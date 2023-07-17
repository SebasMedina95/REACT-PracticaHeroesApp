import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage , MarvelPage , OtrosPage , SearchPage , HeroePage } from "../../heroes"

// Este routing estará representando el routing de los heroes
export const HeroesRoutes = () => {
  return (
    <>
        
        <Navbar />

        <div className="container mt-3">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc"     element={<DcPage     />} />
                <Route path="otros"  element={<OtrosPage  />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="heroe/:heroId"  element={<HeroePage  />} />

                <Route path="/"      element={<Navigate to="marvel" />} />

            </Routes>
        </div>

    </>
  )
}

