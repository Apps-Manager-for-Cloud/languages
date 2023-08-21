import getLanguage from '../';

test('cs as C#', () => {
  expect(getLanguage('cs')).toBe('C#');
});

test('py as Python', () => {
  expect(getLanguage('py')).toBe('Python');
});

test('js as Javascript', () => {
  expect(getLanguage('js')).toBe('Javascript');
});
