import { useCallback } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.NEXT_GOOGLE_API_KEY);

Geocode.setLocationType("ROOFTOP");

export const getLoc = function(address){
    // Get latitude & longitude from address.
    
    if(address === null){
        address = "5242 Calle Cristobal"
    }
    return Geocode.fromAddress(address).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            return {lat, lng};     
        },
        (error) => {
            console.error(error); x
            return error;
        }
    );
}
