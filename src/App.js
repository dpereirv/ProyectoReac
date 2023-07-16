import React, { useReducer } from 'react';

import FormularioCliente from './components/FormularioCliente';
import FornularioVehiculo from './components/FornularioVehiculo';
import ServicioModel from './components/ServicioModel';
import OrdenModel from './components/OrdenModel';
import Menu from './components/Menu';

const initialState = {
  paso: 1,
  cliente: {
    nombre: '',
    email: '',
    numeroContacto: '',
    identificacionFiscal: '',
    tipoIdentificacion: '',
  },
  vehiculo: {
    marca: '',
    modelo: '',
    placa: '',
    nivelGasolina: '',
    estadoExterior: '',
  },
  servicios: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SIGUIENTE_PASO':
      return { ...state, paso: state.paso + 1 };
    case 'PREVIO_PASO':
      return { ...state, paso: state.paso - 1 };
    case 'ACTUALIZAR_CLIENTE':
      return { ...state, cliente: { ...state.cliente, ...action.payload } };
    case 'ACTUALIZAR_VEHICULO':
      return { ...state, vehiculo: { ...state.vehiculo, ...action.payload } };
    case 'ACTUALIZAR_SERVICIOS':
      return { ...state, servicios: action.payload };
    case 'ACEPTAR':
      return initialState;
    default:
      throw new Error('Acción inesperada');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { paso, cliente, vehiculo, servicios } = state;

  const handleClienteSubmit = (clienteData) => {
    dispatch({ type: 'ACTUALIZAR_CLIENTE', payload: clienteData });
    dispatch({ type: 'SIGUIENTE_PASO' });
  };

  const handleVehiculoSubmit = (vehiculoData) => {
    dispatch({ type: 'ACTUALIZAR_VEHICULO', payload: vehiculoData });
    dispatch({ type: 'SIGUIENTE_PASO' });
  };

  const handleServiciosSubmit = (serviciosData) => {
    dispatch({ type: 'ACTUALIZAR_SERVICIOS', payload: serviciosData });
    dispatch({ type: 'SIGUIENTE_PASO' });
  };

  const handlePrevStep = () => {
    dispatch({ type: 'PREVIO_PASO' });
  };

  const handleAceptar = () => {
    dispatch({ type: 'ACEPTAR' });
  };

  return (
    <div>
      <Menu SigtPaso={paso} />
      <br />
      <div id="about" className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-middle">
                <div className="single-well">
                  <div className="App">
                    {paso === 1 && <FormularioCliente clienteData={cliente} onSubmit={handleClienteSubmit} />}
                    {paso === 2 && <FornularioVehiculo vehiculoData={vehiculo} onSubmit={handleVehiculoSubmit} />}
                    {paso === 3 && <ServicioModel serviciosData={servicios} onSubmit={handleServiciosSubmit} />}
                    {paso === 4 && (
                      <OrdenModel cliente={cliente} vehiculo={vehiculo} servicios={servicios} onClick={handleAceptar} />
                    )}
                    {paso > 1 && (
                      <button onClick={handlePrevStep} className='btn btn-warning'>
                        Atrás
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
