import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ElementNull, ImgContainer, NavContainer, NavStart } from '../../styled-components/navbar/NavContainer';
import Logo from '../../assets/logoAuta.png';
import { Modal, Button } from '@mui/material';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import { handleSignOut } from '../../utils/singOut';
import { CloseButton, ContainerModal, Icon, ModalContent } from '../../styled-components/navbar/navModal';
import Swal from 'sweetalert2';

function Navbar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignOutClick = async () => {
    await handleSignOut();
    Swal.fire({
      title: 'Éxito',
      text: 'Sesión cerrada correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
    handleClose();
  };

  const handleSignOut = () => {
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

  const secciones = [
    { label: 'Inicio', path: '/', condition: true },
    { label: 'Automóviles', path: '/Autos', condition: true },
    { label: 'Contacto', path: '/Contacto', condition: true },
    { label: 'Ingresar', path: '/Ingresar', condition: !user },
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
