import { AuthContext } from "./AuthContext";
import PropTypes from 'prop-types';
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
    logged : false
}

const init = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user  : user
    }

}

export const AuthProvider = ({ children }) => {

    // Acá es donde usamos el Provider
    // Primero colocamos el reducer a usar, luego el valor inicial y el tercero de haberlo sería una
    // asignación de valores ya definidos ... Init nos servirá para iniciarlizar las funciones, en este
    // caso, manipular el localStorage
    const [ authState , dispatch ] = useReducer( authReducer, initialState, init ); //Nombres como quiero :v ...

    const login = ( nombre = '' ) => {

        const myUser = {
            id : 'id123',
            name : nombre
        }

        const action = {
            type : types.login,
            payload : myUser
        }

        // Guardo en el localStorage "la sesión"
        localStorage.setItem('user' , JSON.stringify(myUser));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }
        dispatch(action);
    }

    return (

        <AuthContext.Provider value={{
            //Atributos
            ...authState,

            //Métodos
            login  ,
            logout ,
        }}>
            {children}
        </AuthContext.Provider>

    );
}

AuthProvider.propTypes = {
    children: PropTypes.any
}
