import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <Image
          src={"/icons/loader-spinner.svg"}
          width={50}
          height={50}
          className="loader-icon"
        />
        <strong className="loader-title">
          به دلیل حجم بسیار بالای دیتا از سمت سرور لطفا چند ثانیه(12-17) صبر
          کنید!
        </strong>
      </div>
    </div>
  );
};

export default Loader;
