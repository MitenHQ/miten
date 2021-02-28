import { TokenValidator } from '../../types';

export const getTokenValidator = (): TokenValidator => (token) =>
  Promise.resolve(token === 'OK' ? { email: 'test@example.com', name: 'Test' } : null);
