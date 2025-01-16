import axios from "axios";


class Event {

    async eventList(){
        let payload = {
            "query":{},
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "eventId",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": 1,
              "limit": 10,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/eventinfo/list`,
                payload, {headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`}}
              ) 
            if(response.status === 200){
                return response.data
            }else{
                console.log('err in success of eventList',response.status );
                
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    async speakersList(){
        try {
                     
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/speaker/list`)

            if (response.status ===200 ) {
            //    console.log(response.data.data);
            return  response.data
               
            } else {
                console.log('err in success of speakerList', response.status);
            }

        } catch (error) {
            console.log("error", error);
            
        }
    }
}

export const event = new Event()