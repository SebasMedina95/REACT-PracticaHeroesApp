import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {

  //Necesitamos el acceso al Context para el tema de la sesión
  const { login } = useContext(AuthContext)

  //El useNavigate es un Custom Hook pero no lo hicimos nosotros ...
  //Este Custom Hook lo hizo la gente de React Router
  const myNavigate = useNavigate();

  const onLogin = () => {

    //Para mantener la página donde estaba anteriormente, lo podemos hacer acá
    const lastPath = localStorage.getItem('lastPath') || '/';

    //Llamamos al context para que, al "iniciar sesión tener el contexto"
    login( 'Anjellin Manuela Morales Panesso' );

    //Primer parámetro, la ruta a donde quiero dirigirme ...
    //Luego podemos mandar un objeto
    myNavigate(lastPath, {
      replace: true //Remplaza la ruta en la que me encuentro, evita regresar al historial anterior
    })
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <form>
          <legend>Formulario de ejemplo para el Login</legend>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder="Ingrese el usuario ..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder="Ingrese la contraseña ..." />
          </div>
          <button type="button"
            className="btn btn-primary"
            onClick={onLogin}>Ingresar</button>
        </form>
      </div>
    </>
  )
}

