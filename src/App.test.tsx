import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('submitting the mood form displays emoji', () => {
  const { getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText('Write Your emotion you feel !');
  const submitButton = getByTestId('button-icon');

  fireEvent.change(input, { target: { value: 'happy' } });
  fireEvent.click(submitButton);

  const emojiElement = getByTestId('emoji-display');
  expect(emojiElement.textContent).toBe('😊');
});
