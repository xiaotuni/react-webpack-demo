export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';

const initState = { count: 0 };

export default function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}


export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMENT };
}
export function reset() {
  return { type: RESET };
}
