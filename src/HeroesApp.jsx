
import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    // Entonces, al proveer el AuthProvider aquí, podré compartir lo que este tenga en toda la aplicación
    <AuthProvider>
      
      <AppRouter />

    </AuthProvider>
  )
}


