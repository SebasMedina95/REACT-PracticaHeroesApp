import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    //Extraigo del contexto el nombre del usuario
    const { user , logout } = useContext(AuthContext)

    //El useNavigate es un Custom Hook pero no lo hicimos nosotros ...
    //Este Custom Hook lo hizo la gente de React Router
    const myNavigate = useNavigate();

    const onLogout = () => {

        logout();

        //Primer parámetro, la ruta a donde quiero dirigirme ...
        //Luego podemos mandar un objeto
        myNavigate('/login', {
            replace: true //Remplaza la ruta en la que me encuentro, evita regresar al historial anterior
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Publishers
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} ` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} ` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} ` }
                        to="/otros"
                    >
                        Otros
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} ` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        { user?.name }
                    </span>
                    <button className='btn btn-outline-secondary nav-item nav-link'
                            onClick={onLogout}>
                        Logout
                    </button>
                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} ` }
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}