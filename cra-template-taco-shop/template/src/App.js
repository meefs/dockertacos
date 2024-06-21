import React from 'react';
import './App.css';
import tacoGif from './happytaco.gif';
import tacoSound from './taco-sound.mp3';

function App() {
  const [isClicked, setIsClicked] = React.useState(false);
  const audioRef = React.useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
    audioRef.current.play();
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
        <audio ref={audioRef} src={tacoSound} />
      </header>
    </div>
  );
}

export default App;