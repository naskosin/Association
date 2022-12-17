import {
    ComposableMap,
    Geographies,
    Geography,Annotation,Marker

  } from "react-simple-maps";




export const MyMap = ()=>{
    const markers = [
       
        { markerOffset: -15, name: "Sofia", coordinates: [23.319941, 42.698334] },
        { markerOffset: 25, name: "Plovdiv", coordinates: [-47.8825, -15.7942] },
        { markerOffset: 25, name: "Varna", coordinates: [-70.6693, -33.4489] },
        { markerOffset: 25, name: "Burgas", coordinates: [-74.0721, 4.711] },
       
      ];
   
    
     

    return(
     
        
        <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10, -40, 0],
        center: [10, 3],
        scale: 5000
      }}
    >
      <Geographies geography="https://raw.githubusercontent.com/yurukov/Bulgaria-geocoding/master/country.geojson">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      <Annotation
        subject={[23.319941, 42.698334]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Sofia"}
        </text>
      </Annotation>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    )
}