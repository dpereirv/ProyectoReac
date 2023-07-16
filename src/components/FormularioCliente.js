import React, { useState, useCallback } from 'react';

const FormularioCliente = ({ clienteData, onSubmit }) => {
  const [nombre, setNombre] = useState(clienteData.nombre || '');
  const [email, setEmail] = useState(clienteData.email || '');
  const [numeroContacto, setNumeroContacto] = useState(clienteData.numeroContacto || '');
  const [identificacionFiscal, setIdentificacionFiscal] = useState(clienteData.identificacionFiscal || '');
  const [tipoIdentificacion, setTipoIdentificacion] = useState(clienteData.tipoIdentificacion || '');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (tipoIdentificacion === 'cedula' && identificacionFiscal.length !== 10) {
        alert('El campo de identificación para Cédula debe tener 10 dígitos.');
        return;
      }

      if (numeroContacto.length !== 10) {
        alert('El campo de número de contacto debe tener 10 dígitos.');
        return;
      }

      if (tipoIdentificacion === 'ruc' && (identificacionFiscal.length !== 13 || !identificacionFiscal.endsWith('001'))) {
        alert('El campo de identificación para RUC debe tener 13 dígitos y los últimos 3 dígitos deben ser 001.');
        return;
      }

      if (tipoIdentificacion === 'pasaporte' && (identificacionFiscal.length > 15 || !/^[a-zA-Z0-9]+$/.test(identificacionFiscal))) {
        alert('El campo de identificación para Pasaporte debe tener máximo 15 caracteres alfanuméricos.');
        return;
      }

      const clienteData = {
        nombre,
        email,
        numeroContacto,
        identificacionFiscal,
        tipoIdentificacion,
      };
      onSubmit(clienteData);
    },
    [nombre, email, numeroContacto, identificacionFiscal, tipoIdentificacion, onSubmit]
  );

  const isFormValid = nombre && email && numeroContacto && identificacionFiscal && tipoIdentificacion;

  const handleIdentificacionChange = useCallback((e) => {
    const { value } = e.target;

    if (tipoIdentificacion === 'cedula' || tipoIdentificacion === 'ruc') {
      // Remover caracteres no numéricos
      const numericValue = value.replace(/\D/g, '');
      setIdentificacionFiscal(numericValue);
    } else {
      setIdentificacionFiscal(value);
    }
  }, [tipoIdentificacion]);

  const handleContacto = useCallback((e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    setNumeroContacto(numericValue);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Datos del cliente</h2>

        <label className='form-label'>
          Nombre del cliente:
          <input type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />

        <label className='form-label'>
          Email:
          <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label className='form-label'>
          Número de contacto:
          <input type="text" className='form-control' value={numeroContacto} onChange={handleContacto} />
        </label>
        <br />

        <label className='form-label'>
          Tipo de identificación:
          <select value={tipoIdentificacion} className="form-select" onChange={(e) => setTipoIdentificacion(e.target.value)}>
            <option className="selected" value="">Seleccionar</option>
            <option value="cedula">Cédula</option>
            <option value="ruc">RUC</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </label>
        <br />

        <label className='form-label'>
          Identificación:
          <input type="text" className='form-control' value={identificacionFiscal} onChange={handleIdentificacionChange} />
        </label>
        <br />

        <button type="submit" className='btn btn-warning' disabled={!isFormValid}>Siguiente</button>
      </div>
    </form>
  );
};

export default FormularioCliente;
