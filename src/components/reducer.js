export const clienteReducer = (state, action) => {
  switch (action.type) {
    case 'ACT_CLIENTE':
      return { ...action.payload };
    case 'RESET_CLIENTE':
      return {};
    default:
      return state;
  }
};

export const vehiculoReducer = (state, action) => {
  switch (action.type) {
    case 'ACT_VEHICULO':
      return { ...action.payload };
    case 'RESET_VEHICULO':
      return {};
    default:
      return state;
  }
};

export const serviciosReducer = (state, action) => {
  switch (action.type) {
    case 'ACT_SERVICIOS':
      return [...action.payload];
    default:
      return state;
  }
};
