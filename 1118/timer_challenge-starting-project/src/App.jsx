import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} remainingTime={timeRemaining}/>
        <TimerChallenge title="Medium" targetTime={5} remainingTime={timeRemaining}/>
        <TimerChallenge title="Hard" targetTime={15} remainingTime={timeRemaining}/>
        <TimerChallenge title="Pro" targetTime={30} remainingTime={timeRemaining}/>
      </div>
    </>
  );
}

export default App;
