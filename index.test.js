import arc from './index';

test('draw circle', () => {
  expect(arc({
    x: 150,
    y: 150,
    r: 100,
  })).toEqual(
    'M 50 150 A 100 100 0 1 1 250 150 A 100 100 1 1 1 50 150 Z',
  );

  expect(arc({
    x: 150,
    y: 150,
    R: 100,
  })).toEqual(
    'M 50 150 A 100 100 0 1 1 250 150 A 100 100 1 1 1 50 150 Z',
  );
});

test('draw ring', () => {
  expect(arc({
    x: 150,
    y: 150,
    R: 100,
    r: 80,
  })).toEqual(
    'M 50 150 A 100 100 0 1 1 250 150 A 100 100 1 1 1 50 150 M 70 150 A 80 80 0 1 1 230 150 A 80 80 1 1 1 70 150 Z',
  );

  expect(arc({
    x: 150,
    y: 150,
    R: 80,
    r: 100,
  })).toEqual(
    'M 50 150 A 100 100 0 1 1 250 150 A 100 100 1 1 1 50 150 M 70 150 A 80 80 0 1 1 230 150 A 80 80 1 1 1 70 150 Z',
  );

  expect(arc({
    x: 150,
    y: 150,
    R: 80,
    r: 100,
    start: 0,
    end: 360,
  })).toEqual(
    'M 50 150 A 100 100 0 1 1 250 150 A 100 100 1 1 1 50 150 M 70 150 A 80 80 0 1 1 230 150 A 80 80 1 1 1 70 150 Z',
  );
});

test('draw sector', () => {
  expect(arc({
    x: 150,
    y: 150,
    r: 100,
    start: 100,
    end: 360,
  })).toEqual(
    'M 150.00 150.00 L 248.48 167.36 A 100 100 0 1 1 150.00 50.00 L 150.00 150.00 A 0 0  0 1 0 150.00 150.00 Z',
  );
});

test('draw arc', () => {
  expect(arc({
    x: 150,
    y: 150,
    R: 100,
    r: 80,
    start: 300,
    end: 150,
  })).toEqual(
    'M 80.72 110.00 L 63.40 100.00 A 100 100 0 1 1 200.00 236.60 L 190.00 219.28 A 80 80  0 1 0 80.72 110.00 Z',
  );

  expect(arc({
    x: 150,
    y: 150,
    R: 100,
    r: 80,
    start: 0,
    end: 50,
  })).toEqual(
    'M 150.00 70.00 L 150.00 50.00 A 100 100 0 0 1 226.60 85.72 L 211.28 98.58 A 80 80  0 0 0 150.00 70.00 Z',
  );

  expect(arc({
    x: 150,
    y: 150,
    R: 100,
    r: 80,
    start: 360,
    end: 410,
  })).toEqual(
    'M 150.00 70.00 L 150.00 50.00 A 100 100 0 0 1 226.60 85.72 L 211.28 98.58 A 80 80  0 0 0 150.00 70.00 Z',
  );
});

test('x,y default value', () => {
  expect(arc({
    r: 100,
  })).toEqual(
    'M -100 0 A 100 100 0 1 1 100 0 A 100 100 1 1 1 -100 0 Z',
  );
});

test('no result', () => {
  expect(arc()).toEqual('');
  expect(arc({})).toEqual('');

  expect(arc({
    x: 0,
    y: 0,
    r: -1,
  })).toEqual('');

  expect(arc({
    x: 0,
    y: 0,
    R: -1,
  })).toEqual('');

  expect(arc({
    x: 150,
    y: 150,
    r: 100,
    start: 10,
    end: 10,
  })).toEqual('');
});
