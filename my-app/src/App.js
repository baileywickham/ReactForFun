import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';



function convertTime(time) {
    const t = time - new Date().getTime()
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds]
}

function Timer(props) {
  const [countDown, setCountdown] = useState(convertTime(props.t))
  const [days, hours, minutes, seconds] = countDown

  useEffect(() => {
    setTimeout(() => {
      setCountdown(convertTime(props.t));
    }, 1000);
  });
  return  <p>{props.text} {days}d {hours}h {minutes}m {seconds}s</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How long until Bailey sees Nina?</h1>
        <Timer text={"For two weeks of fun: "} t={new Date("Mar 27, 2022, 12:32:00").getTime()}></Timer>
        <Timer text={"Indefinitely: "} t={new Date("Jul 6, 2022, 9:40:00").getTime()}></Timer>
      </header>
    </div>
  );
}

export default App;