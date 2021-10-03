import React, { useEffect, useState } from 'react';

type Props = {
  delay: number;
  children?: React.ReactNode;
};

export default function DelayedCompoent({ delay, children }: Props) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, []);

  return show ? <>{children}</> : <></>;
}
