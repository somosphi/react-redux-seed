export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export function receiveApiError(message) {
  return {
    type: RECEIVE_API_ERROR,
    message,
  };
}
