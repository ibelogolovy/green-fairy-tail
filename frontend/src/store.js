import { createStore } from 'redux';
import compose from '../src/utils/compose';
// import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';


// const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
//   console.log(action.type, store.getState());
//   return next(action);
// };

// const stringMiddleware = () => (next) => (action) => {
//   if (typeof action === 'string') {
//     return next({
//       type: action
//     });
//   };
//   return next(action);
// };


// store enhancers
 const stringEnhancer = (createStore) => (...args) => {
   const store = createStore(...args);
   const originalDispatch = store.dispatch;
 
   store.dispatch = (action) => {
     if (typeof action === 'string') {
       return originalDispatch({
         type: action
       });
     };
 
     return originalDispatch(action);
   };
   return store;
 };
 
 
 const logEnhancer = (createStore) => (...args) => {
   const store = createStore(...args);
   const originalDispatch = store.dispatch;
 
   store.dispatch = (action) => {
     console.log(action.type);
     return originalDispatch(action);
   };
   return store;
 };


const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

// const store = createStore(reducer);

// monkey patching
// const originalDispatch = store.dispatch;
//
// store.dispatch = (action) => {
//   if (typeof action === 'string') {
//     return originalDispatch({
//       type: action
//     });
//   };
//   return originalDispatch(action);
// };


// const delayedActionCreator = (timeout) => (dispatch) => {
//   setTimeout(() => dispatch({
//     type: 'DELAYED_ACTION'
//   }), timeout)
// };

// store.dispatch(delayedActionCreator(2000));

export default store;
