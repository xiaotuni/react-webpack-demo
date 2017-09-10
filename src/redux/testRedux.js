import { increment, decrement, reset } from './actions/counter';

import store from './store';

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log('---unsubscribe---');
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

unsubscribe();



