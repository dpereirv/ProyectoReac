import React from 'react';

const OrdenModel = ({ cliente, vehiculo, servicios, onClick }) => {
  // Obtener la fecha y hora de entrega
  const getNextDeliveryDate = () => {
    const currentDate = new Date();
    const nextDay = new Date();

    // Calcular el día siguiente asegurándose de que sea de lunes a sábado
    nextDay.setDate(currentDate.getDate() + 1);

    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1);
    }

    // Establecer la hora a las 3 de la tarde
    nextDay.setHours(15, 0, 0);

    return nextDay;
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <h2>Orden de trabajo</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td colSpan={3}>
              <h2>
                <b>Taller Automotriz Car Shop</b>
              </h2>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h3>Datos Cliente</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Nombre:</b> {cliente.nombre}
            </td>
            <td>
              <b>Email:</b> {cliente.email}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>Número de contacto:</b> {cliente.numeroContacto}
            </td>
            <td>
              <b>Identificación fiscal:</b> {cliente.identificacionFiscal}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h3>Datos del Vehículo</h3>
            </td>
          </tr>
          <tr>
            <td>
              <b>Marca:</b> {vehiculo.marca}
            </td>
            <td>
              <b>Modelo:</b> {vehiculo.modelo}
            </td>
            <td>
              <b>Placa:</b> {vehiculo.placa}
            </td>
          </tr>
          <tr>
            <td>
              <b>Nivel de gasolina:</b> {vehiculo.nivelGasolina}
            </td>
            <td colSpan={2}>
              <b>Estado exterior:</b> {vehiculo.estadoExterior}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <b>Fecha y Hora de entrega: </b>
              {getNextDeliveryDate().toLocaleString()}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h3>Especificaciones técnicas</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <ul>
                {servicios.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleClick} className="btn btn-warning">
        Aceptar
      </button>
    </div>
  );
};

export default OrdenModel;
