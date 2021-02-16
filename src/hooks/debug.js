import { useEffect } from 'react';

export function useConsoleLog(message) {
  useEffect(() => {
    console.log(message);
  }, []);
}
