import React, { useState, useEffect } from "react";

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [deboucedValue, setDeboucedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDeboucedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return deboucedValue;
};
