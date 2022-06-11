
import './App.css';
import Timer from './components/Timer';

function App() {

  let starttime = 10;
  let endtime = 18;

  return (
    <div className="App">
      <Timer starttime={starttime} endtime={endtime} />
    </div>
  );
}

export default App;
