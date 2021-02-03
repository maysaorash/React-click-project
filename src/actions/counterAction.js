// export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';


// export function updateCounter(newCounter) {
//   // console.log(newCounter);
//   return {
//     type: UPDATE_COUNTER,
//     payload: { counter: newCounter },
//   };
// }
export const increaseCount = () => ({
  type: INCREASE_COUNT,
  payload: {count: 5}
})

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
  payload: {count: 5}
})