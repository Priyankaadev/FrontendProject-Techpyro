import { createSlice } from "@reduxjs/toolkit";
import { event } from "@/mocks/event";
import store from "../store/store";
// import { useDispatch } from "react-redux";

const initialState = {
  data: [],
};

const eventSlice = createSlice({
  name: "eventData",
  initialState,
  reducers: {
    getEventData(state, action) {
      try {
        if (action.payload) {
          state.data = action.payload;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { getEventData } = eventSlice.actions;
const eventReducer = eventSlice.reducer;
export default eventReducer;

export const eventListData = ({ query, sort, populate, page, limit }) => async (dispatch) => {

  try {
    const response = await event.eventList({
      query,
      sort,
      populate,
      page,
      limit,
    });
    if (response) {
      await dispatch(getEventData(response.data.data));
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
  
};