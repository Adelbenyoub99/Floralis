import React from 'react'
import Fleur from '../components/fleur'
export default function Fleurs(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>Nos Fleurs</h1>
        </div>
      <div className="container">
        <div className="row">
          {props.fleurs.map((flr) => (
            <Fleur key={flr.id} fleur={flr} />
          ))}
        </div>
      </div>



    </div>
  )
}
