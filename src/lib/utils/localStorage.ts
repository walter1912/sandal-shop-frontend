// thao tác với localStorage
//
// 'use client'
export const getLocalStorage = (key: string): any => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(key);
    if (storedData !== null) {
      try {
        const parsedData = JSON.parse(storedData);
        return parsedData;
      } catch (error) {
        console.error(`Error parsing data for key "${key}":`, error);
      }
    }
  }
  return undefined;
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  return undefined;
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
};
//
