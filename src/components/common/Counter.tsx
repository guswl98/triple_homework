import { useEffect, useState } from 'react';
import { easeOutExpo } from '../../utils/animations';

type Props = {
  startNumber: number;
  endNumber: number;
  duration: number;
};

export default function Counter({ startNumber, endNumber, duration }: Props) {
  const [number, setNumber] = useState(startNumber);
  const startTime = Date.now();
  const endTime = startTime + duration;

  const printCount = () => {
    const time = Date.now();
    if (endTime <= time) {
      setNumber(endNumber);
    } else {
      setNumber(
        easeOutExpo(
          time - startTime,
          startNumber,
          endNumber - startNumber,
          duration,
        ),
      );
      setTimeout(() => {
        printCount();
      }, 0);
    }
  };

  useEffect(() => {
    printCount();
  }, [startNumber, endNumber]);

  return <span>{number}</span>;
}
