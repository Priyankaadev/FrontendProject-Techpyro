import axios from "axios";


class Event {

    // async eventList(){
    //     try {
    //         const response = await axios.post(``)
            
    //     } catch (error) {
            
    //     }
    // }

    async speakersList({data}){
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/userapp/speaker/list`, data)

            if (response.status ===200 ) {
                response.data
            } else {
                console.log('err in success', response.status);
            }

        } catch (error) {
            console.log("error", error);
            
        }
    }



}

export const event = new Event()