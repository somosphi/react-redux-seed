export const SUM_VALUE = 'SUM_VALUE';
export const SUBTRACT_VALUE = 'SUBTRACT_VALUE';

export const sumValue = value => ({
  type: SUM_VALUE,
  value,
});

export const subtractValue = value => ({
  type: SUBTRACT_VALUE,
  value,
});
