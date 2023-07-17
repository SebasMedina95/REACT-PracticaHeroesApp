import { useRouteError } from "react-router-dom";
 
export const ErroresApp = () => {
  const error = useRouteError();
 
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error !.</p>
      <p>La página que está intentado acceder no existe !.</p>

      <p>Presione <a href="/">aquí</a> para volver al home. </p>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}