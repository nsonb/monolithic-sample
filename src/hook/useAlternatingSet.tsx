import { useState, useEffect } from "react"

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const useAlternatingSet = (start: number[], setNumber: number, interval: number) => {
  const [ current, setCurrent ] = useState<number[]>(start)
  const [ future, setFuture ] = useState<number[]>([])

  let temp: number[] = []

  useEffect(() => {
    const intervalId = setInterval(()=> {
      console.log('....')
    }, interval);
    return () => clearInterval(intervalId);
  }, [current, setCurrent, interval]);

  for(var i = 0; i < start.length; i++) {
    let m = -2;
    do {
      m = getRandomInt(0, setNumber-1)
    } while(current.includes(m) || temp.includes(m))
    temp.push(m)
  }
  return temp

}