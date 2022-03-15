// ACTIONS TYPES

export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const REQUEST_SENT = 'REQUEST_SENT';
export const CLOSE_CONTACT_MODAL = 'CLOSE_CONTACT_MODAL';
export const CONTACT_ERROR = 'CONTACT_ERROR';
export const SUBMIT_ACCEPTED = 'SUBMIT_ACCEPTED';

// ACTIONS CREATORS

export const submitRequest = () => ({
  type: SUBMIT_REQUEST,
});

export const requestSent = () => ({
  type: REQUEST_SENT,
});

export const closeContactModal = () => ({
  type: CLOSE_CONTACT_MODAL,
});

export const contactError = (errorStatus) => ({
  type: CONTACT_ERROR,
  errorStatus,
});

export const submitAccepted = () => ({
  type: SUBMIT_ACCEPTED,
});
