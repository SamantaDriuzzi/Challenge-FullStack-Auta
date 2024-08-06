import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ElementNull, ImgContainer, NavContainer, NavStart } from '../../styled-components/navbar/NavContainer';
import Logo from '../../assets/logoAuta.png';
import { Modal, Button } from '@mui/material';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import { signOutGoogle } from '../../utils/singOut';
import { CloseButton, ContainerModal, Icon, ModalContent } from '../../styled-components/navbar/navModal';
import Swal from 'sweetalert2';


function Navbar() {
  const { user, isAdmin } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignOut = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    });
  
    if (result.isConfirmed) {
      try {
        await signOutGoogle();
  
        await Swal.fire({
          title: 'Éxito',
          text: 'Sesión cerrada correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
  
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
  
        handleClose();
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al cerrar sesión. Inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  const handleSignOutClick = () => {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleSignOutClick();
      }
    });
  };

  const handleSignIn = () => {
    window.location.href = '/Ingresar';
  }

  const handleCart = () => {
    window.location.href = '/cart';
  }
  const handleAdmin = () => {
    window.location.href = '/Admin';
  }

  const secciones = [
    { label: 'Inicio', path: '/', condition: true },
    { label: 'Automóviles', path: '/Autos', condition: true },
    { label: 'Contacto', path: '/Contacto', condition: true },
    { label: 'Ingresar', path: '/Ingresar', condition: !user },
    { label: 'Panel Admin', path: '/Admin', condition: !user },
    { label: 'Favoritos', path: '/favoritos', condition: !!user }
  ];

  return (
    <NavContainer>
      <NavStart>
        <ElementNull></ElementNull>
        <ImgContainer>
          <img src={Logo} alt="Logo de Auta" />
        </ImgContainer>
        <Icon onClick={handleOpen}>
          <FaUserCircle size={42} />
        </Icon>
      </NavStart>

      <ul>
        {secciones.map((seccion) =>
          seccion.condition ? (
            <li key={seccion.label}>
              <Link to={seccion.path}>{seccion.label}</Link>
            </li>
          ) : null
        )}
      </ul>

      <Modal open={open} onClose={handleClose}>
        <ContainerModal>
          <ModalContent>
            <CloseButton onClick={handleClose}>X</CloseButton>
            {user ? (
              <>
                <Button onClick={handleCart}>Ver carrito</Button>
                <Button onClick={handleSignOut}>Cerrar sesión</Button>
                {isAdmin ? <Button onClick={handleAdmin}>Panel Admin</Button> : null}
                <Button onClick={() => window.location.href = '/Favoritos'}>Ver Favoritos</Button>
              </>
            ) : (
              <Button onClick={handleSignIn}>Iniciar sesión</Button>
            )}
          </ModalContent>
        </ContainerModal>
      </Modal>
    </NavContainer>
  );
}

export default Navbar;
