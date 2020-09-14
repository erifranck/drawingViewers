import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { imgurReducer } from "./reducers/imgur";
import { followerReducer } from "./reducers/followers";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
      key: 'root',
      storage,
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = persistReducer(persistConfig, combineReducers({
      imgur: imgurReducer,
      followers: followerReducer
}))

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)