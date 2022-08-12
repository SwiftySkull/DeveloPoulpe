/**
 * Convert a string into an URL friendly format
 *
 * @param {string} string The string to convert
 * @returns String converted to URL format
 */
export const stringToUrl = (string = '') => {
  const newString = string
    .trim()
    .toLowerCase()
    .replace(/[ '/,]/g, '-')
    .replace('à', 'a')
    .replace(/[éèê]/g, 'e')
    .replace(/[:!?$]/g, '')
    .replace('ù', 'u')
    .replace('ô', 'o')
    .replace('ç', 'c');

  return newString;
};

/**
 * When submitting a request, first function to check if a phone number or an email has been entered
 *
 * @param {string} email The email entered or not
 * @param {string} tel The phone number entered or not
 * @returns boolean depenging on either one or the other has been entered or none of them
 */
export const checkMailOrPhone = (email, tel) => {
  if ((email === '' || email === null || email === undefined) && (tel === '' || tel === null || tel === undefined)) {
    return false;
  }

  return true;
};

/**
 * Validator for the contact request form
 *
 * @param {string} name The name entered
 * @param {string} email The email entered
 * @param {string} tel The phone number entered
 * @param {string} subject The subject of the request entered
 * @param {string} message The message content
 * @returns boolean True or False depending if the validation if passed or not
 */
export const contactValidator = (name, email, tel, subject, message) => {
  let sendRequest = true;

  // Name
  const nameRegex = /[a-zA-Z0-9' -]+/g;
  const nameFound = name.match(nameRegex);

  if (name === '' || name === null || name === undefined || nameFound === null) {
    sendRequest = false;
  }

  // Subject
  const subjectRegex = /[a-zA-Z0-9?!:' -]+/g;
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

/**
 * Convert a string into HTML code
 *
 * @param {string} text The text to translate into HTML
 * @returns The text in HTML format
 */
export function createMarkup(text) {
  return { __html: text };
}

/**
 * Gives the number of days from a specific date until now
 *
 * @param {string} date The date of the first day
 * @returns Number of days from the date to now
 */
export function dateFromStart(date) {
  const today = Date.now();
  const startDev = Date.parse(date);
  const total = (today - startDev) / 86400000; // 1000 / 60 / 60 / 24

  return Math.trunc(total);
}
