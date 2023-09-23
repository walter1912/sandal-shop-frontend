// thao tác với localStorage
//
const localStorage = window.localStorage;
export const getLocalStorage = (key: string): any => {
  const storedData = localStorage.getItem(key);

  if (storedData !== null) {
    try {
      const parsedData = JSON.parse(storedData);
      return parsedData;
    } catch (error) {
      console.error(`Error parsing data for key "${key}":`, error);
    }
  }
  return undefined;
};

export const setLocalStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
//
