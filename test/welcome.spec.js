import { welcome, onNavigate, registerWithGoogle } from '../src/components/welcome.js';

/**
*@jest-environmentn jsdom
*/
jest.mock('../src/components/welcome.js');

describe('Los test de auth', () => {
  test('El componente es una funcion', () => {
    expect(typeof welcome).toBe('function');
  });
});
