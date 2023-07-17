import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroePage = () => {

  //useParams también es un Custom Hook que nos proporciona la gente de Router React para obtener los parámetros
  const myNavigate = useNavigate();
  const params = useParams();
  const { heroId } = params;
  
  //En un futuro podríamos tener un proceso pesado, una carga de datos mas pesada, entonces podemos memorizar los resultados para aligerar la carga de las peticiones y hacer que la aplicación sea mas liviana ...
  //-----------------------------------------------------------------------------------
  //!RECORDEMOS!, useMemo para memorizar valores, useCallback para memorizar funciones
  //-----------------------------------------------------------------------------------
  //Entonces, cada vez que el ID cambie, disparamos la memorización
  const hero = useMemo( () => getHeroById( heroId ), [  heroId ] );

  const onNavigateBack = () => {
    const getPublisher = heroId.split('-')[0];
    console.log(getPublisher);
    
    if(getPublisher == 'dc'){
      myNavigate('/dc', {
        replace: true
      });
    }else{
      myNavigate('/marvel', {
        replace: true
      });
    }

  }
  
  //Por si no se encuentra el héroe o es vulnerada la URL
  if(!hero) {
    return <Navigate to="/marvel" />
  }

  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

  return (
    <>
        <div className="row mt-5 animate__animated animate__fadeInDown">
          <div className="col-4">
            <img src={heroImageUrl} 
                 alt={hero.superhero}
                 title={hero.superhero}
                 className="img-thumbnail" />
          </div>
          <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Alter Ego: </b> {hero.alter_ego} </li>
              <li className="list-group-item"> <b>Publiser: </b> {hero.publisher} </li>
              <li className="list-group-item"> <b>First Appearance: </b> {hero.first_appearance} </li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>
            <h5 className="mt-3">Description Uni: </h5>
            <p>{hero.desc1}</p>
            <h5 className="mt-3">Description Gen: </h5>
            <p>{hero.desc2}</p>
            <hr />
            <button className="btn btn-outline-primary"
                    onClick={onNavigateBack}>Return List</button>
          </div>
        </div> 
    </>
  )
}

