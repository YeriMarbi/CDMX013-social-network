import { welcome } from '../src/components/welcome.js';

/**
*@jest-environmentn jsdom
*/
jest.mock('../src/lib/auth.js');
jest.mock('../src/main.js');

describe('Los test de auth', () => {
  test('El componente es una funcion', () => {
    expect(typeof welcome).toBe('function');
  });
});
