import { types } from "../types/types";

// Tener la idea de como va lucir el elemento
const initialState = {
    logged: false,
    name : ''
}

export const authReducer = ( state = initialState , action ) => {

    switch (action.type) {

        case types.login:  
            return {
                ...state, //Por si el día de mañana tenemos más argumentos ...
                logged: true,
                user: action.payload
            };
        case types.logout: 
            return {
                logged: false,
                name: ''
            };
    
        default: return state;

    }

}
