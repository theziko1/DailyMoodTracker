import React from 'react';
import { fireEvent, render, screen  } from '@testing-library/react';
import App from './App';
import { userEvent } from '@testing-library/user-event'
import  '@testing-library/jest-dom'


test('renders welcome message with correct class', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText('Welcome to DailyMoodTracker Application');
  expect(welcomeMessage).toBeInTheDocument();
  expect(welcomeMessage).toHaveClass('head');
});


test('submitting the mood form displays emoji', async () => {
   render(<App />);

   const button = screen.getByRole("button",{name:/Done/i})
   const input = screen.getByPlaceholderText(/Write Your emotion you feel !/i)
  await userEvent.type(input,'happy')
  userEvent.click(button)

  expect(screen.getByText('😊')).toBeInTheDocument()
});

test('submitting the mood form with empty input does not trigger emoji display', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Write Your emotion you feel !/i);
  const submitButton = screen.getByRole("button",{name:/Done/i})

  // Simuler la soumission du formulaire avec un input vide
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(submitButton);

  // Vérifier que l'emoji n'est pas affiché
  const emojiElement = screen.queryByTestId('emoji-display');
  expect(emojiElement).toBeNull();
});
