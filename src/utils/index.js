export const checkMailOrPhone = (email, tel) => {
  if ((email === '' || email === null || email === undefined) && (tel === '' || tel === null || tel === undefined)) {
    return false;
  }

  return true;
};

export const contactValidator = (name, email, tel, subject, message) => {
  let sendRequest = true;

  // Name
  const nameRegex = /[a-zA-Z0-9'-]+/g;
  const nameFound = name.match(nameRegex);

  if (name === '' || name === null || name === undefined || nameFound === null) {
    sendRequest = false;
  }

  // Subject
  const subjectRegex = /[a-zA-Z0-9?!:'-]+/g;
  const subjectFound = subject.match(subjectRegex);

  if (subject === '' || subject === null || subject === undefined || subjectFound === null) {
    sendRequest = false;
  }

  // Message
  if (message === '' || message === null || message === undefined || message === null) {
    sendRequest = false;
  }

  // Email + Phone
  const emailRegex = /[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+/g;
  const emailFound = email.match(emailRegex);

  const telRegex = /[0-9]{10}/g;
  const telFound = tel.match(telRegex);

  if ((email === '' || email === null || email === undefined) && (tel === '' || tel === null || tel === undefined)) {
    sendRequest = false;
  }

  if (email !== '' && email !== null && email !== undefined && emailFound === null) {
    sendRequest = false;
  }

  if (tel !== '' && tel !== null && tel !== undefined && telFound === null) {
    sendRequest = false;
  }

  return sendRequest;
};

export const yyy = 2;
