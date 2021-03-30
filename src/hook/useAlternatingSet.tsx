import { useState, useEffect } from "react"

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

interface StateType {
  current: number[],
  future: number[]
}

export const useAlternatingSet = (start: number[], setNumber: number, interval: number) => {
  const x: StateType = { current : start, future : []}
  console.log(x)
  const [ current_future, setCurrent ] = useState<StateType>(x)

  useEffect(() => {
    const temp_future = getFuture(current_future.current)
    const temp_value = { current : x.current, future : temp_future}
    setCurrent(temp_value)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(()=> {
      const temp_current = current_future.future
      const temp_future = getFuture(current_future.current)
      const temp_value = { current : temp_current, future : temp_future}
      setCurrent(temp_value)
    }, interval);
    return () => clearInterval(intervalId);
  }, [current_future]);

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
  
  return { current: current_future.current, future: current_future.future }

}