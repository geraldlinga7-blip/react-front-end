import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount((currentCount) => currentCount + 1)}>
      Count: {count}
    </button>
  );
}