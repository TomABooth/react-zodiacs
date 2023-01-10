import React from 'react';
import './Main.css';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import background from './background.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  );
}
