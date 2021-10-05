import React, { useEffect, useState } from 'react';

type Props = {
  delay: number;
  children?: React.ReactNode;
};

export default function DelayedComponent({ delay, children }: Props) {
  const [visibility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setVisibility(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      className={`${visibility ? 'visible' : 'invisible'}`}
      style={{ visibility: visibility ? 'visible' : 'hidden' }}
    >
      {children}
    </div>
  );
}
