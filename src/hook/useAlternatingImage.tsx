import { useState, useEffect } from 'react'

export const useAlternatingImage = (start: number, array: string[], interval: number) => {
  const [current, setCurrent] = useState(start)
  
  useEffect(() => {
    const intervalId = setInterval(()=> {
        setImage(true)
    }, interval);
    return () => clearInterval(intervalId);
  }, [current, setCurrent, interval]);

  const setImage = (value: boolean) => {
    if(value === true) {
        (current + 1) >= array.length ? setCurrent(0) : setCurrent(current+1)
    } else {
        (current - 1) < 0 ? setCurrent(array.length-1) : setCurrent(current-1)
    }
  }
  
  return {current, setImage}
}