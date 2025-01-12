// import {reducer as flightReducer} from "../slices/flights";
// import {reducer as PaymentReducer} from "../slices/payment";
// import {reducer as checkoutReducer} from "../slices/checkout";
// import{reducer as hotelReducer} from "../slices/hotels"
// import{reducer as paymentReducer} from "../slices/room"
import {combineReducers} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
   // flights:flightReducer,
   // payment:PaymentReducer ,
   // checkout:checkoutReducer,
   // hotel:hotelReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)


