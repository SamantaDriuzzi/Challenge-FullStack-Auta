import { useNavigate } from 'react-router-dom';
import { Button, ContainerPanelAdmin } from '../../styled-components/admin/panel';

export const PanelAdmin = () => {
  const navigate = useNavigate();

  return (
    <ContainerPanelAdmin>
      <Button onClick={() => navigate('/Admin/addVehicle')}>Agregar Vehículos</Button>
      <Button onClick={() => navigate('/Admin/editVehicleList')}>Editar Vehículos</Button>
    </ContainerPanelAdmin>
  );
}
