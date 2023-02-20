import { useState } from "react";
import { useEffect } from "react";

export const isFalsy = (value) => value === 0 ? false : !value;

export const cleanObject =(object) => {
  const result={...object};
  Object.keys(result).forEach(key=> {
    const value = result[key];
    if(isFalsy(value)){
      delete result[key]
    }
  })
  return result
}

export const useMount=(callback)=> {
  useEffect(()=> {
    callback()
  },[])
}

export const useDebounce =(value, delay) => {
  const [deboucedValue, setDeboucedValue] =useState(value)
  useEffect(()=> {
    const timeout = setTimeout(()=>setDeboucedValue(value), delay)
    return ()=>clearTimeout(timeout)
  }, [value, delay])
  return deboucedValue
}