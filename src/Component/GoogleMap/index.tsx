"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const GoogleMapShow = () => {
  const [selected, setSelected] = useState<any>(null);
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  const center = {
    lat: 28.563743, // Adjust latitude
    lng: 77.068891, // Adjust longitude
  };

  const locations = [
    {
      id: 1,
      name: "E2E Research Services Pvt. Ltd.",
      address:
        "Level One, Eros Metro Building , Sector 14 Dwarka New Delhi -110075",
      phoneNo: ["+91-1120897708"],
      position: { lat: 28.600706, lng: 77.026016 },
    },
    {
      id: 2,
      name: "E2E Research Services Pvt. Ltd.",
      address: "98 Cuttermill Road Suite 466 S Great Neck, NY 11021",
      phoneNo: ["+1-917-962-0521"],
      position: { lat: 40.783967, lng: -73.732578 },
    },
  ];
  return (
    <div className="map-show">
      <LoadScript googleMapsApiKey="AIzaSyBMTZWXHM2difV8CW_WD_m3dzdq7brseRo">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={1}>
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => setSelected(location)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={selected.position}
              onCloseClick={() => setSelected(null)}>
              <div className="custom-map-tooltip">
                <h4>{selected.name}</h4>

                <div>{selected.address}</div>
                <br />
                <div className="contact-phone">
                  {" "}
                  <div className="d-flex align-items-center">
                    <span className="contact-font"> - Phone : </span>
                    <a
                      className="info-text "
                      href={`tel: ${selected?.phoneNo[0]}`}>
                      {selected?.phoneNo[0]}
                    </a>
                    {selected?.phoneNo.length > 1 && (
                      <>
                        <span className="line-slash">/</span>
                        <a
                          className="info-text "
                          href={`tel: ${selected?.phoneNo[1]}`}>
                          {selected?.phoneNo[1]}
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <br />
                <span>
                  - Email:{" "}
                  <a href="mailto:info@e2eresearch.com">info@e2eresearch.com</a>
                </span>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapShow;
