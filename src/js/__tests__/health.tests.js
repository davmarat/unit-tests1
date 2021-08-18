import health from '../app';

test('health', () => {
  expect(health({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('wonded', () => {
  expect(health({ name: 'Маг', health: 35 })).toBe('wounded');
});

test('critical', () => {
  expect(health({ name: 'Маг', health: 1 })).toBe('critical');
});
