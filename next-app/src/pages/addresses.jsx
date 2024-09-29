import Address from "@/components/addressesSlice/address";
import Loader from "@/components/loader";
import { fetchingAddresses } from "@/hooks/useAddress";
import { useEffect, useState } from "react";

const AddressesPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAddresses = async () => {
      const fetchedAddresses = await fetchingAddresses({ setLoading });
      setAddresses(fetchedAddresses);
    };

    loadAddresses();
  }, []);

  const preparedAddresses = addresses.map((address, index) => (
    <Address address={address} key={index} />
  ));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section id="addresses">
          <div className="container">
            <div className="head">
              <span>آدرس ها و مشخصات</span>
            </div>
            <div className="addresses">{preparedAddresses}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddressesPage;
