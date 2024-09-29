import Axios from "@/utils/axiosConfig";

export const fetchingAddresses = async ({ setLoading }) => {
  setLoading(true);
  const addresses = await Axios.get("karfarmas/address")
    .then((response) => {
      setLoading(false);
      return response.data;
    })
    .catch((error) => {
      setLoading(false);
      console.log("Error fetching addresses:", error);
    });
  return addresses;
};

export const newAddress = async ({ setLoading, data, setActiveComponent }) => {
  setLoading(true);

  await Axios.post("karfarmas/address", data)
    .then(() => {
      setLoading(false);
      setActiveComponent("success");
    })
    .catch((error) => {
      setLoading(false);
      console.log("Error submitting address:", error);
    });
};
