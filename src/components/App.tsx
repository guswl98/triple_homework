import './App.css';
import DelayedComponent from './common/DelayComponent';
import Statistics from './Statistics';
import StoreAwards from './StoreAwards';
import TrippleAward from './TrippleAward';

export default function App() {
  return (
    <div className="App">
      <DelayedComponent delay={0}>
        <TrippleAward />
      </DelayedComponent>
      <div className="container">
        <DelayedComponent delay={100}>
          <Statistics />
        </DelayedComponent>
        <DelayedComponent delay={200}>
          <StoreAwards />
        </DelayedComponent>
      </div>
    </div>
  );
}
