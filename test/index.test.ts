import * as SemanticReleaseTest from '../src/index';

it('should return 0', () => {
  expect(SemanticReleaseTest.test()).toBe(0);
});

it('should return omfg', () => {
  expect(SemanticReleaseTest.omfg()).toBe('omfg');
});

it('should say hello', () => {
  global.console = { ...global.console, log: jest.fn() };
  SemanticReleaseTest.sayHello();
  expect(global.console.log).toBeCalledWith('Hello!');
});
