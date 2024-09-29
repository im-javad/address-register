import { useState } from "react";
import dynamic from "next/dynamic";
import UserInfo from "@/components/registerAddressSlice/userInfo";
import SuccessRegister from "@/components/registerAddressSlice/successRegister";
const UserLocation = dynamic(
  () => import("@/components/registerAddressSlice/userLocation"),
  {
    ssr: false,
  }
);

const RegisterAddress = () => {
  const [activeComponent, setActiveComponent] = useState("info");
  const [newAddressData, setNewAddressData] = useState({});

  return (
    <section id="register-address">
      {activeComponent === "info" ? (
        <UserInfo
          setData={setNewAddressData}
          setActiveComponent={setActiveComponent}
        />
      ) : activeComponent === "location" ? (
        <UserLocation
          newAddressData={newAddressData}
          setActiveComponent={setActiveComponent}
        />
      ) : activeComponent === "success" ? (
        <SuccessRegister />
      ) : null}
    </section>
  );
};

export default RegisterAddress;
