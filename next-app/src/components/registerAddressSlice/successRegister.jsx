import Image from "next/image";
import Link from "next/link";

const SuccessRegister = () => {
  return (
    <div className="success-register">
      <div className="container">
        <div className="content">
          <Image
            src={"/icons/done-icon.svg"}
            width={45}
            height={45}
            style={{ width: "100%" }}
          />
          <span>اطلاعات شما با موفقیت ثبت شد</span>
        </div>
        <div className="redirect">
          <Link href={"/addresses"} className="link">
            <button>مشاهده اطلاعات</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessRegister;
