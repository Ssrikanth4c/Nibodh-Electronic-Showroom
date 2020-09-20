import React from 'react'
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/**
* @author
* @function MapAddress
**/

const MapAddress = compose(
    withProps({
      /**
       * Note: create and replace your own key in the Google console.
       * https://console.developers.google.com/apis/dashboard
       */
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKV9J3jYSHRdmAZKhMI8-n0EU2eukT62c&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat:17.0772996, lng: 82.1349005 }}
  >
    {props.isMarkerShown && <Marker position={{ lat:17.0772996, lng: 82.1349005 }} />}
  </GoogleMap>
)


export default MapAddress