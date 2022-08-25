import React from "react"

export default function Content(props) {
  return (
    <div className="content-container">
      <div className="card-container">
        <div className="box image-frame">
            <img src={props.item.imageUrl} className="image"/>
        </div>
        <div className="text-content">
            <div className="location-info">
              <img src="../src/assets/map-pin-fill.svg" className="map-pin"/>
              <span className="country">{props.item.location.toUpperCase()}</span>
              <a href={props.item.googleMapsUrl} className="maps-link"> View on Google Maps</a>
            </div>
            <h4 className="location-name">{props.item.title}</h4>
            <h5 className="dates">{props.item.startDate} - {props.item.endDate}</h5>
            <p className="description">{props.item.description}</p>
        </div>
      </div>
    </div>  
  )
}