import React, { useState } from 'react';

const ServicioModel = ({ serviciosData, onSubmit }) => {
  const [servicios, setServicios] = useState(serviciosData || []);

  const serviciosList = [
    { id: 'cambioAceite', label: 'Cambio de aceite' },
    { id: 'cambioFrenos', label: 'Cambio de frenos' },
    { id: 'alineacionBalanceo', label: 'Alineación y balanceo' },
    { id: 'diagnosticoGeneral', label: 'Diagnóstico general' },
    { id: 'revisionElectrica', label: 'Revisión sistema eléctrico' },
    { id: 'revisionSuspension', label: 'Revisión de la suspensión' },
  ];

  const handleCheckboxChange = (e, servicioId) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setServicios((prevServicios) => [...prevServicios, servicioId]);
    } else {
      setServicios((prevServicios) => prevServicios.filter((s) => s !== servicioId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(servicios);
  };

  const isFormValid = servicios.length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Selección de servicios</h2>
        <br />
        {serviciosList.map((servicio) => (
          <div key={servicio.id}>
            <input
              type="checkbox"
              checked={servicios.includes(servicio.id)}
              onChange={(e) => handleCheckboxChange(e, servicio.id)}
            />
            <label>{servicio.label}</label>
            <br />
          </div>
        ))}
        <button type="submit" className='btn btn-warning' disabled={!isFormValid}>
          Generar Orden de Trabajo
        </button>
      </div>
    </form>
  );
};

export default ServicioModel;
