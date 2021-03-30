import { useState, useEffect } from 'react'

export const useAlternatingImage = (start: number, array: any[], interval: number, step: number = 1) => {
  const [current, setCurrent] = useState(start)
  
  useEffect(() => {
    const intervalId = setInterval(()=> {
        setImage(true)
    }, interval);
    return () => clearInterval(intervalId);
  }, [current, setCurrent, interval]);

  const setImage = (value: boolean) => {
    if(value === true) {
        (current + step) >= array.length ? setCurrent(0) : setCurrent(current+step)
    } else {
        (current - step) < 0 ? setCurrent(array.length-step) : setCurrent(current-step)
    }
  }
  
  return {current, setImage}
}