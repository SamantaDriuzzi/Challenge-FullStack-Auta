
import { Link } from "react-router-dom";
import { NavContainer } from "../../styled-components/navbar/NavContainer";
import Logo from "../../assets/logoAuta.png";

function Navbar() {

  const secciones = [
    { label: "Inicio", path: "/", condition: true },
    { label: "Automoviles", path: "/Autos", condition: true },
    { label: "Contacto", path: "/Contacto", condition: true },
    { label: "Registrarse", path: "/Registro", condition: true },
    { label: "Ingreso", path: "/Ingreso", condition: true },
  ];

  return (
    <NavContainer>
      <img src={Logo} alt="Logo de Auta" />
      <ul>
        {secciones.map((seccion) =>
          seccion.condition ? (
            <li key={seccion.label}>
              <Link to={seccion.path}>{seccion.label}</Link>
            </li>
          ) : null
        )}
      </ul>
    </NavContainer>
  );
}

export default Navbar;