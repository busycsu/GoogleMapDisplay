import GoogleMapReact from 'google-map-react';
import {getLoc} from './geocode'

export default function map({loc={lat:50,lng:33}}){
    // if(typeof(loc)===undefined){
    //     loc={lat:50,lng:33}
    // }
    // console.log(loc)
    // getLatAndLng()
    return(
      <div style={{ height: '50vh', width: '50%' }}>
         <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_GOOGLE_API_KEY }}
            defaultCenter={{
              lat: 50,
              lng: 33
            }}
            defaultZoom={11}
          >
        </GoogleMapReact>)
      </div>)
    
}

export async function getStaticProps(){
    // fetch the location
    var loc = await getLoc("4991 ponderosa way")
    if(typeof(loc)===undefined){
        loc={lat:50,lng:33}
    }
    // loc = {lat:50,lng:33}
    console.log(loc)
    // return the loc as prop
    
    return{
        props:{
            loc,
        }
    }
}
