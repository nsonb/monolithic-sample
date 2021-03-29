import { useState, useEffect } from "react"

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const useAlternatingSet = (start: number[], setNumber: number, interval: number) => {
  const [ current, setCurrent ] = useState<number[]>(start)
  const [ future, setFuture ] = useState<number[]>([])

  useEffect(() => {
    setFuture(getFuture(current))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(()=> {
      console.log(current)
      console.log(future)
      const temp = current;
      setCurrent(future)
      setFuture(getFuture(temp))
    }, interval);
    return () => clearInterval(intervalId);
  }, [current, future, interval]);

  const getFuture = (temp: number[]) => {
    let newFuture: number[] = []
    for(var i = 0; i < start.length; i++) {
      let m = -2;
      do {
        m = getRandomInt(0, setNumber-1)
      } while(temp.includes(m) || newFuture.includes(m))
      newFuture.push(m)
    }
    return newFuture
  }
  
  return { current, future }

}