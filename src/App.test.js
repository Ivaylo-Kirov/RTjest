import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {sum} from './functions';
import {shoppingList} from './objects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('sum is loaded in', () => {
  expect(sum).not.toBeNull();
});

test('2 plus 2 is 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('3 plus 3 is 6', () => {
  expect(sum(3, 3)).toBe(6);
});

test('shopping list contains water', () => {
  expect(shoppingList).toContain('water');
});

test('object assignment inline', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2})
});