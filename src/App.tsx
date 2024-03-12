import { RepeatIcon } from '@chakra-ui/icons'
import './App.css'
import {  Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import React, { useState } from 'react';

function App() {
  
  const [mood, setMood] = useState<string>('');
  const [emoji, setEmoji] = useState<string>('');

  const moodEmojis: { [key: string]: string } = {
    happy: '😊',
    sad: '😢',
    angry: '😡',
    surprised: '😮',
    neutral: '😐',
    excited: '😁',
    anxious: '😰',
    tired: '😴',
    loving: '❤️',
    indifferent: '🤷‍♂️',
  };

  const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputMood = e.target.value.toLowerCase();
    setMood(inputMood);
    setEmoji(moodEmojis[inputMood] || '');
    console.log('Mood submitted:', mood);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMood('');
    setEmoji('');
  };

  return (
    <>
      <div>
      </div>
      <h1 className="head">Welcome to DailyMoodTracker Application</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
            <Input placeholder='Write Your emotion you feel !' width={450} value={mood} onChange={handleMoodChange} className="input"/>
           
            <IconButton isRound={true} variant='solid'  type="submit"  colorScheme='red'  aria-label='Done'  fontSize='20px'  icon={<RepeatIcon />}  />
            </form>
      </div>
      <div className="read-the-docs">
      {emoji && <div className="emoji"> {emoji}</div>}
      </div>
    </>
  )
}

export default App
