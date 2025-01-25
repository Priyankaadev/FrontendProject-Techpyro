// import { createSlice} from "@reduxjs/toolkit"; 
// import { checkoutApi } from "@/src/mocks/checkout";
// import { AppDispatch } from "../store/store";
// import 
 
// const initialState: any = {
//     itinary: {},
//     meal:[],
//     seatStructure:{},
//     itineraryDetails:[]
// };

// const checkoutSlice = createSlice({
//     name: "checkout",
//     initialState,
//     reducers: {
//         getItinaryPrice(state,action){
//             try{
//                 if(action.payload){
//                     state.itinary = action.payload
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         },
//         getItineraryDetails(state,action){
//             try{
//                 if(action.payload){
//                     state.itineraryDetails = Array.isArray(action.payload) ? [...action.payload] : []
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         },
//         getSSRMaster(state,action){
//             try{
//                 if(action.payload){
//                     state.meal = Array.isArray(action.payload) ? [...action.payload] : []
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         },
//         getSeatStructure(state,action){
//             try{
//                 if(action.payload){
//                     state.seatStructure = action.payload
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         },
       
//     },

// });

// export const { reducer } = checkoutSlice;

// export const getItinaryPrice = async () => {
  
// }

// export const getSSRMaster = async () => {
//     try {
         
//         const result = await checkoutApi.getSSRMaster(data); 
        
//         if (result) {
//             await dispatch(checkoutSlice.actions.getSSRMaster(result));
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// export const savePaxDetail = <T>(data:T) => async (dispatch:AppDispatch) => {
//     try {
         
//         const result = await checkoutApi.savePaxDetail(data); 
        
//         if (result) {
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// export const getItineraryDetails = <T>(data:T) => async (dispatch:AppDispatch) => {
//     try {
         
//         const result = await checkoutApi.getItineraryDetails(data); 
        
//         if (result) {
//             await dispatch(checkoutSlice.actions.getItineraryDetails(result));
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
// export const getSeatStructure = <T>(data:T) => async (dispatch:AppDispatch) => {
//     try {
         
//         const result = await checkoutApi.getSeatStructure(data); 
        
//         if (result) {
//             await dispatch(checkoutSlice.actions.getSeatStructure(result));
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// export const updatePassenger = <T>(data:T) => async (dispatch:AppDispatch) => {
//     try {
         
//         const result = await checkoutApi.updatePassenger(data); 
        
//         if (result) {
//             // await dispatch(checkoutSlice.actions.updatePassenger(result));
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// export const assignSeats = <T>(data:T) => async (dispatch:AppDispatch) => {
//     try {
         
//         const result = await checkoutApi.assignSeats(data); 
        
//         if (result) {
//             // await dispatch(checkoutSlice.actions.assignSeats(result));
//             return result;
//         }
//         else{
//             return false;
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

 

// export default checkoutSlice;
