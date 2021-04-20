import Stuff from '../stuff';

test('file should be changed when even', () => {
  let stuff = new Stuff()

  stuff.shouldTriggerChange('path', 2)
  let result = stuff.shouldTriggerChange('path', 2)

  expect(result).toBe(true);
});

test('file should not be changed when odd', () => {
  let stuff = new Stuff()

  let result = stuff.shouldTriggerChange('path', 1)

  expect(result).toBe(false);
});

test('change file content', () => {
  let stuff = new Stuff()

  let result = stuff.changeFileContent('content')

  expect(result).toBe('content\nappended');
});
