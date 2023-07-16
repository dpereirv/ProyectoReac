import React, { useState } from 'react';

const FornularioVehiculo = ({ vehiculoData, onSubmit }) => {
  const [vehiculo, setVehiculo] = useState({
    marca: vehiculoData.marca || '',
    modelo: vehiculoData.modelo || '',
    placa: vehiculoData.placa || '',
    nivelGasolina: vehiculoData.nivelGasolina || '',
    estadoExterior: vehiculoData.estadoExterior || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehiculo((prevVehiculo) => ({ ...prevVehiculo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(vehiculo);
  };

  const isFormValid =
    vehiculo.marca && vehiculo.modelo && vehiculo.placa && vehiculo.nivelGasolina && vehiculo.estadoExterior;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Datos del vehículo</h2>

        <label className='form-label'>
          Marca:
          <input
            type='text'
            name='marca'
            value={vehiculo.marca}
            className='form-control'
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='form-label'>
          Modelo:
          <input
            type='text'
            name='modelo'
            value={vehiculo.modelo}
            className='form-control'
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='form-label'>
          Placa:
          <input
            type='text'
            name='placa'
            value={vehiculo.placa}
            className='form-control'
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='form-label'>
          Nivel de gasolina:
          <input
            type='text'
            name='nivelGasolina'
            value={vehiculo.nivelGasolina}
            className='form-control'
            onChange={handleChange}
          />
        </label>
        <br />

        <label className='form-label'>
          Estado exterior:
          <textarea
            name='estadoExterior'
            value={vehiculo.estadoExterior}
            className='form-control'
            onChange={handleChange}
          />
        </label>
        <br />

        <button type='submit' className='btn btn-warning' disabled={!isFormValid}>
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default FornularioVehiculo;
