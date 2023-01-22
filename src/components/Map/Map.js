import React, { useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Icon } from '@mui/material';
import "../../App.css";

const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
const center = {
    lat: 49.2667 ,
    lng: -123.2500
  };

const botanicLoc = {
  lat: 49.254204,
  lng: -123.25085
}

const botanicLoc2 = {
  lat: 	49.2529000,
  lng: -123.2468000
}

const woodWardLoc = {
  lat: 49.2672000,
  lng: -123.2578000
}

const coffeeLoc = {
  lat: 49.2613000,
  lon: 123.2489000
}


function Map() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
  
    const MapMarkerIcon = () => <Icon fontSize='large' color='secondary'>My Location</Icon>
    const [map, setMap] = React.useState(null);
    const [position, setPosition] = useState({});
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }, []);

    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
      return () => navigator.geolocation.clearWatch(watchId);
    }, []);


  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    if(isLoaded){
        return (
            <div className='container'>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount} 
            > 
            <Marker position={botanicLoc} title={'My marker'} icon={MapMarkerIcon} onClick={() => setIsInfoOpen(true)}>
           {isInfoOpen && (
              <InfoWindow onCloseClick={() => setIsInfoOpen(false)}>
                <div>
                  <h1>Test name 1 </h1>
                  <h2>UBC Botanical Garden.</h2>
                  <p>Hey, I am Test Name Please Change, I am currently a 4th year CS student here. I would love to help you out in my spare time!</p>
                </div>
              </InfoWindow>
            )}
          </Marker> 
          <Marker position={woodWardLoc} title={'My marker 2 '} icon={MapMarkerIcon} onClick={() => setIsInfoOpen(true)}>
           {isInfoOpen && (
              <InfoWindow onCloseClick={() => setIsInfoOpen(false)}>
                <div>
                  <h1>Test name 2 </h1>
                  <h2>Woodward Library</h2>
                  <p>I would love to help you in your classes! Just a coffee is fine!</p>
                </div>
              </InfoWindow>
            )}
          </Marker> 
          <Marker position={center} title={'My marker'} icon={MapMarkerIcon} onClick={() => setIsInfoOpen(true)}>
           {isInfoOpen && (
              <InfoWindow onCloseClick={() => setIsInfoOpen(false)}>
                <div>
                  <h1>Test name 3 </h1>
                  <h2>Coffee Shop</h2>
                  <p>I would love to help you in your classes! Just a coffee is fine!</p>
                </div>
              </InfoWindow>
            )}
          </Marker> 
          <Marker position={botanicLoc2} title={'My marker'} icon={MapMarkerIcon} onClick={() => setIsInfoOpen(true)}>
           {isInfoOpen && (
              <InfoWindow onCloseClick={() => setIsInfoOpen(false)}>
                <div>
                  <h1>Test name 4</h1>
                  <h2>UBC Botanical Garden.</h2>
                  <p>Hey ik eng and CS</p>
                </div>
              </InfoWindow>
            )}
          </Marker>              
            </GoogleMap>
            
              
              
            </div>
            //animation={google.maps.Animation.DROP}
    )}else{
        return (
            <div> Loading...</div>
        )
    }
  }

  export default React.memo(Map)