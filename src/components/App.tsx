import './App.css';
import DelayedCompoent from './DelayComponent';
import Statistics from './Statistics';
import StoreAwards from './StoreAwards';
import TrippleAward from './TrippleAward';

export default function App() {
  return (
    <div className="App">
      <DelayedCompoent delay={0}>
        <TrippleAward />
      </DelayedCompoent>
      <div className="container">
        <DelayedCompoent delay={100}>
          <Statistics />
        </DelayedCompoent>
        <DelayedCompoent delay={200}>
          <StoreAwards />
        </DelayedCompoent>
      </div>
    </div>
  );
}
