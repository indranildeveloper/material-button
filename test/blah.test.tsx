import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MaterialButton } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const button = document.createElement('button');
    ReactDOM.render(<MaterialButton />, button);
    ReactDOM.unmountComponentAtNode(button);
  });
});
