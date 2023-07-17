import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate , useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Le envío las rutas hijas como parámetro
export const PrivateRoute = ({ children }) => {
    // Del contexto creado extraigo logged para validar
    const { logged } = useContext(AuthContext)
    
    
    //Vamos a usar el useLocation para el tema de mantener la página donde estaba antes de cerrar sesión
    const location = useLocation();
    const { pathname, search } = location;

    const lastPath = pathname + search;
    localStorage.setItem('lastPath' , lastPath);

    // De lo contrario, retorno al login
    return (logged) ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    children: PropTypes.any
}