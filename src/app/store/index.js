import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, compose(
  applyMiddleware(createLogger(), thunkMiddleware),
));

export const persistor = persistStore(store);