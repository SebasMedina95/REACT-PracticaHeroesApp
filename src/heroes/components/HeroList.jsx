import { getHeroesByPublisher } from "../helpers";
import PropTypes from 'prop-types';
import { HeroCard } from "./";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

    //En un futuro podríamos tener un proceso pesado, una carga de datos mas pesada, entonces podemos memorizar los resultados para aligerar la carga de las peticiones y hacer que la aplicación sea mas liviana ...
    //-----------------------------------------------------------------------------------
    //!RECORDEMOS!, useMemo para memorizar valores, useCallback para memorizar funciones
    //-----------------------------------------------------------------------------------
    //Entonces, cada vez que el publisher cambie, disparamos la memorización
    const heroes =  useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} heroe={hero} />
                ))
            }
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.any
}