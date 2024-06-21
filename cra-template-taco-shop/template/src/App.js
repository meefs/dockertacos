import React from 'react';
import './App.css';
import tacoGif from './happytaco.gif';
import tacoSound from './taco-sound.mp3';

function App() {
  const [isClicked, setIsClicked] = React.useState(false);
  const audioRef = React.useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
    playAudio();
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={tacoGif}
          alt="Taco"
          className={isClicked ? 'App-logo clicked' : 'App-logo'}
          onClick={handleClick}
        />
        <p>Welcome to the Taco Shop!</p>
        <audio ref={audioRef} src={tacoSound} preload="auto" />
        <button onClick={playAudio} className="taco-button">🌮</button>
      </header>
    </div>
  );
}

export default App;