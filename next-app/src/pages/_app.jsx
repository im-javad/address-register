import "leaflet/dist/leaflet.css";
import "@/assets/scss/run.scss";
import Navbar from "@/components/navbar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
