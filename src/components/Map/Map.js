import React, { useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Icon } from '@mui/material';
import "../../App.css";

const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
const center = {
    lat: 49.246292,
    lng: -123.116226
  };



function Map() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
  
    const MapMarkerIcon = () => <Icon fontSize='large' color='secondary'>My Location</Icon>
    const [map, setMap] = React.useState(null);
    const [position, setPosition] = useState({});

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

    console.log(position);
  
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
                    center={position}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount} 
            >              
            </GoogleMap>
            <Marker 
              position={position}
              title={'My marker'}
              icon={MapMarkerIcon}
               />
            </div>
            //animation={google.maps.Animation.DROP}
    )}else{
        return (
            <div> Loading...</div>
        )
    }
  }

  export default React.memo(Map)