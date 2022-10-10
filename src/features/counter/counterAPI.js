// A mock function to mimic making an async request for data
/* eslint-disable-next-line import/prefer-default-export */
export function fetchCount(amount = 1) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: amount }), 500));
}
