import { useEffect, useState } from 'react';
import '../styles/App.css';
import Statistics from './Statistics';
import StoreAwards from './StoreAwards';
import TripleAward from './TripleAward';

export default function App() {
  const [visiblility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setVisibility(true);
  }, []);

  return (
    <div className={`App ${visiblility ? 'visible' : ''}`}>
      <TripleAward />
      <div className="container">
        <Statistics />
        <StoreAwards />
      </div>
    </div>
  );
}
