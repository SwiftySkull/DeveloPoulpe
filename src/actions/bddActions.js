export const BDD_TEST = 'BDD_TEST';
export const UPDATE_INPUT_BDD_VALUE = 'UPDATE_INPUT_BDD_VALUE';

export const bddTest = (evt) => ({
  type: BDD_TEST,
  evt,
});

export const updateInputBDDValue = (field, value) => ({
  type: UPDATE_INPUT_BDD_VALUE,
  field,
  value,
});
