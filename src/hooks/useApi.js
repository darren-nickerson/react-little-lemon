import { useReducer } from "react";

const createSeededRandomGenerator = (seed) => {
  const modulus = 2 ** 35 - 31;
  const multiplier = 185852;
  let state = seed % modulus;

  return () => (state = (state * multiplier) % modulus) / modulus;
};

const fetchAvailableTimes = (date) => {
  if (!date) {
    return []; // Return an empty array if date is not provided
  }

  const result = [];
  const randomGenerator = createSeededRandomGenerator(new Date(date));

  const currentDate = new Date();
  const isToday = date.toDateString() === currentDate.toDateString();

  for (
    let hour = isToday ? currentDate.getHours() + 1 : 17;
    hour <= 23;
    hour++
  ) {
    if (isToday && hour === currentDate.getHours() + 1) {
      // For today's date, only include times 1 hour ahead of the current time
      result.push(`${hour}:00`);
      result.push(`${hour}:30`);
    } else {
      // For other dates or later hours today, include all available times
      if (randomGenerator() < 0.5) {
        result.push(`${hour}:00`);
      }
      if (randomGenerator() < 0.5) {
        result.push(`${hour}:30`);
      }
    }
  }

  return result;
};

const initialState = { availableTimes: [] }; // Set initial state with an empty array

const updateAvailableTimes = (state, date) => {
  const newAvailableTimes = date ? fetchAvailableTimes(new Date(date)) : [];

  return { availableTimes: newAvailableTimes };
};

const useApi = () => {
  const [state, dispatch] = useReducer(updateAvailableTimes, initialState);

  return {
    state,
    dispatch,
  };
};

export default useApi;
