
import eventReducer from "../slices/event"
import {combineReducers} from "@reduxjs/toolkit";

import {
   persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "root",
   version: 1,
   storage,
}

const rootReducer = combineReducers({
   event : eventReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)


