// import axios from "axios";
// // import seat from '../constant/seatStructure.json'


// class CheckoutApi {
//   async getItinaryPrice<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/GetItineraryPrice`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getItineraryDetails<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/GetItineraryDetails`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async getSSRMaster<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/GetMeals`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async savePaxDetail<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/SavePaxDetail`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async updatePassenger<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/UpdatePassengers`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async assignSeats<T>(data:T) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/AssignSeats`,
//         data
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getSeatStructure(data:any) {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_KEY}/TravelAPI/GetSeatStructure?Equipmentno=${data?.Equipmentno}&AirlineCode=${data?.AirlineCode}`
//       );

//       if (response.status === 200) {
//         return response.data;
//       } else {
//         return false;
//       }

//       // return seat

//     } catch (error) {
//       console.log(error);
//     }
//   }


// }

// export const checkoutApi = new CheckoutApi();
