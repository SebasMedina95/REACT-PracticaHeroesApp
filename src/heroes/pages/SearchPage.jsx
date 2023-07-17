import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {

  //Para realizar la navegación con la busqueda ...
  const navigate = useNavigate();

  //Para obtener un Query Parameter, lo hacemos con el useLocation que es otro Custom Hook de React Route
  //Usamos URLSearchParams para extraer los parámetros y luego realizamos la conversión a Object.fromEntries
  //de esta manera obtenemos un objeto con los Query Params que me llegan :3 !
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = Object.fromEntries(searchParams.entries());
  const { q = ''} = params;
  //Ahora si realicemos la busqueda:
  const heroesSearch = getHeroByName(q);

  //Para ayudarme con la validación ternaria abajo para mostar los alerts
  const showSearch = ( q.length === 0 ); 
  const showError = ( q.length > 0 ) && heroesSearch.length === 0; //El query no devolvió nada

  //El Custom Hook que habíamos creado para el tema de los formularios
  const { searchText , onInputChange } = useForm({
    searchText : q || ''
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    // if( searchText.trim().length <= 1 ){
    //   alert('Requiere al menos dos caracteres para la búsqueda');
    //   return;
    // }

    //Re envio al mismo formulario pero genero el Query Parameter
    navigate(`?q=${searchText.trim().toLowerCase()}`);

  }

  return (
    <>
        <div className="row mt-3">
          <h1>Busqueda de Héroes</h1>
          <hr />
          <div className="col-5">
            <h4>Buscando</h4>
            <hr />
            <form onSubmit={ onSearchSubmit } >
              <input type="text"
                     placeholder="Buscar héroe ..."
                     className="form-control"
                     name="searchText"
                     autoComplete="off"
                     value={ searchText }
                     onChange={ onInputChange }  
              />
              <button className="btn btn-outline-primary mt-2">Realizar Busqueda</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            {/* {

              ( q === '' )
              ? <div className="alert alert-primary">Buscar un Héroe ...</div>
              : 
              ( heroesSearch.length === 0 ) && <div className="alert alert-danger">No se encontraron resultados con <b> { q } </b></div>
              

            } */}

            <div className="alert alert-primary animate__animated animate__fadeInLeft" style={ {display: showSearch ? '' : 'none'} }>
              Buscar un Héroe ...
            </div>

            <div className="alert alert-danger animate__animated animate__fadeInLeft" style={ {display: showError ? '' : 'none'} }>
              No se encontraron resultados con <b> { q } </b>
            </div>



            {
              heroesSearch.map( h => (
                <HeroCard key={h.id} heroe={h} />
              ))
            }


          </div>
        </div>   
    </>
  )
}


