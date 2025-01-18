import header from "@/layout/header/header";
import axios from "axios";


class Event {

    async eventList({query,sort,populate,page,limit}){
        let payload = {
            "query":query,
            "options": {
              "collation": "",
              "sort": sort,
              "populate": populate,
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": page,
              "limit": limit,
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

    async CommitteeList({query,sort,populate,page,limit}){
        let payload = {
            "query":query,
            "options": {
              "collation": "",
              "sort": sort,
              "populate": populate,
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": page,
              "limit": limit,
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
            const response = await axios.post( `${process.env.NEXT_PUBLIC_HOST_URL}/userapp/committee/list`, payload, 
               {headers:{Authorization: `Bearer ${localStorage.getItem("authToken")}` }}
            )
            if (response.status ===200 ) {
                //    console.log(response.data.data);
                return  response.data
                   
                } else {
                    console.log('err in success of committeeList', response.status);
                }
            
          } catch (error) {
            console.log("error", error);
            
          }

    }

    async speakersList({query,sort,populate,page,limit}){
        let payload = {
            "query":query,
            "options": {
              "collation": "",
              "sort": sort,
              "populate": populate,
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": page,
              "limit": limit,
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
                     
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/speaker/list`, payload, 
                {headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`}}
            )

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