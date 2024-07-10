"use client"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: -5.068382263183594,
    lng: -42.747222900390625
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDU8Wa_359rNrfRNE8v26UyAK4dzA5rCdM"
      libraries={["maps", "marker"]}
      version="beta"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={14}
      >
        <Marker
          position={defaultCenter}
          title="Localização do Evento"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
