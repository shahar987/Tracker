import React from 'react'
import { Link } from 'react-router-dom';

const ClientsPage = () => {
  return (
    <div>ClientsPage
      <br/>
      <Link
      to={ "/client"}
      state={{name:"shahar-pc"}} // your data array of objects
      >
        <button>
        name: shahar-pc
        ip:10.0.0.1</button>
      </Link>
      <br></br>
      <Link
      to={ "/client"}
      state={{name:"shir-pc"}} // your data array of objects
      >
        <button>
        name: shir-pc
        ip:10.0.0.1</button>
      </Link>
    </div>
  )
}

export default ClientsPage