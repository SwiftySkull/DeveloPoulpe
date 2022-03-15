// ACTIONS TYPES

export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const REQUEST_SENT = 'REQUEST_SENT';

// ACTIONS CREATORS

export const submitRequest = () => ({
  type: SUBMIT_REQUEST,
});

export const requestSent = () => ({
  type: REQUEST_SENT,
});
