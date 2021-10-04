import { useEffect, useState } from 'react';

type Props = {
  startNumber: number;
  endNumber: number;
  duration: number;
};

export default function Counter({ startNumber, endNumber, duration }: Props) {
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    let countStart = 0;
    if (countStart === endNumber) return;
    const timer = setInterval(() => {
      countStart += 1;
      setNumber(countStart);
      if (countStart === endNumber) clearInterval(timer);
    }, 10);
  }, [startNumber, endNumber]);

  return <span>{number}</span>;
}
