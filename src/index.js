import store from './store';
import { productAdded } from './actions';


store.dispatch(productAdded("Product 1"));

console.log(store.getState());