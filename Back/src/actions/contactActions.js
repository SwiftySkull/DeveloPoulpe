// ACTIONS TYPES

export const REQUEST_SENT = 'REQUEST_SENT';
export const CLOSE_CONTACT_MODAL = 'CLOSE_CONTACT_MODAL';
export const CONTACT_ERROR = 'CONTACT_ERROR';
export const SUBMIT_ACCEPTED = 'SUBMIT_ACCEPTED';
export const SEND_REQUEST = 'SEND_REQUEST';

// ACTIONS CREATORS

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

export const sendRequest = (form) => ({
  type: SEND_REQUEST,
  form,
});
