// import { createStore, applyMiddleware, compose } from "redux";
// import { reducers } from "./reducers/index";
// import thunk from 'redux-thunk'

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice"

export const store = configureStore({
  reducer: {
    product: productReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     reducers,
//     {},
//     composeEnhancers(applyMiddleware(thunk))
// )
