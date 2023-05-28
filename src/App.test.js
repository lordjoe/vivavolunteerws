import { render, screen } from '@testing-library/react';
import App from './App';
import PersistentObject from "./PersistentObject";

test('renders learn react link', () => {
  render(<App />);

  while(!PersistentObject.hasData()) {
    render(<App />);

  }
});
