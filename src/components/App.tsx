import './App.css';
import Statistics from './Statistics';
import StoreAwards from './StoreAwards';
import TrippleAward from './TrippleAward';

export default function App() {
  return (
    <div className="App">
      <TrippleAward />
      <div>
        <Statistics />
        <StoreAwards />
      </div>
    </div>
  );
}
