import { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import { newAddress } from "@/hooks/useAddress";

const UserLocation = ({ newAddressData, setActiveComponent }) => {
  const [loading, setLoading] = useState(false);

  const [center, setCenter] = useState([35.906, 51.086]);
  const mapRef = useRef();

  const userLocationIcon = new L.Icon({
    iconUrl: "/icons/marker-icon.svg",
    iconSize: [70, 72],
    iconAnchor: [30, 40],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const MapMoveHandler = () => {
    useMapEvent("move", () => {
      const map = mapRef.current;
      if (map) {
        const center = map.getCenter();
        setCenter([center.lat, center.lng]);
      }
    });
    return null;
  };

  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const map = mapRef.current;
          if (map) {
            map.flyTo([latitude, longitude], 13);
          }
          setCenter([latitude, longitude]);
        },
        (err) => {
          console.error("Error fetching user location: ", err);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async () => {
    const newAddressDetails = {
      first_name: newAddressData.firstName,
      last_name: newAddressData.lastName,
      coordinate_mobile: newAddressData.coordinateMobile,
      coordinate_phone_number: newAddressData.coordinatePhoneNumber,
      address: newAddressData.address,
      region: 1,
      lat: center[0],
      lng: center[1],
      gender: newAddressData.gender,
    };
    try {
      const res = await newAddress({
        setLoading,
        newAddressDetails,
        setActiveComponent,
      });
      console.log(res);
    } catch (error) {
      console.error("Error submitting address:", error);
    }
  };

  return (
    <div className="user-location">
      <div className="map-wrapper">
        <div className="mobile-map-head">
          <div
            className="container back-icon"
            onClick={(e) => setActiveComponent("info")}
          >
            <Image src={"/icons/back-icon.svg"} width={24} height={24} />
          </div>
          <div className="mobile-title">
            <span className="title">انتخاب موقعیت</span>
          </div>
        </div>
        <div className="desktop-map-head">
          <div className="content">
            <div
              className="back-icon"
              onClick={(e) => setActiveComponent("info")}
            >
              <Image src={"/icons/back-icon.svg"} width={24} height={24} />
            </div>
            <span>انتخاب آدرس</span>
          </div>
        </div>
        <div className="map-self">
          <div className="mobile-show-my-location">
            <Image
              src={"/icons/myloc-icon.svg"}
              width={82}
              height={82}
              alt="myloc-icon"
              onClick={handleLocateUser}
            />
          </div>
          <div className="map">
            <MapContainer
              center={center}
              zoom={7}
              className="map-size"
              ref={mapRef}
            >
              <div className="title">
                <span>موقعیت مورد نظر خود را روی نقشه مشخص کنید</span>
              </div>
              <div className="desktop-show-my-location">
                <Image
                  src={"/icons/myloc-icon.svg"}
                  width={82}
                  height={82}
                  alt="myloc-icon"
                  onClick={handleLocateUser}
                />
              </div>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapMoveHandler />
              {center && <Marker position={center} icon={userLocationIcon} />}
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="submit-form-btn">
        <button className="btn-self" onClick={handleSubmit}>
          {loading ? <span class="loader"></span> : <span>ثبت و ادامه</span>}
        </button>
      </div>
    </div>
  );
};

export default UserLocation;
