import { redirect } from "next/dist/server/api-utils";

export const getServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/register-address",
      permanent: false,
    },
  };
};

const HomePage = () => {
  return;
};

export default HomePage;
