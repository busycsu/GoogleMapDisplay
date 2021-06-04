// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'


import Orders from '../Orders.json'
import map from "./utils/map"


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => map()


export default function Home() {

  return (
    <div>
      <h>
        Search page
      </h>
      <br/>
      <input></input>
      <br/>
      <button>
        Search
      </button>
      {Orders.map(order => (
        <div key={order.trackingNumber}>
          {order.trackingNumber} {order.names} {order.address} {order.userID}
          </div>
      ))}
      
      <Map />
    </div>
  )
}
