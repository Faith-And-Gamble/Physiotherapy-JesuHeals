import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import Home from './Home';

test('renders correctly when there are no items', async () => {
  // when
  const tree = act(() => {
    TestRenderer.create(<Home />).toJSON();
  });
  // then
  expect(tree).toMatchSnapshot();
});

test('should check labels and data from API', async () => {
  waitFor(() => { expect(screen.getByText('Start Work')).toBeInTheDocument(); });
  waitFor(() => { expect(screen.getByText('DEVOPS & CLOUD COMPUTING 1 YEAR OFFLINE PROGRAM.')).toBeInTheDocument(); });
});
