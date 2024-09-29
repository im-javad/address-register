import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("register");

  return (
    <nav id="navbar">
      <div className="container">
        <div className="head">
          <div className="logo">
            <Image
              src={"/icons/achare-logo.svg"}
              width={45}
              height={25}
              alt="achareh-icon"
              className="image-icon"
            />
          </div>
          <div className="links">
            <div
              className={`register-link ${
                activeLink == "register" ? "text-color" : "primary-color"
              }`}
              onClick={(e) => setActiveLink("register")}
            >
              <Link href={"/register-address"}>ثبت آدرس</Link>
            </div>
            <div
              className={`addresses-link ${
                activeLink == "addresses" ? "text-color" : "primary-color"
              }`}
              onClick={(e) => setActiveLink("addresses")}
            >
              <Link href={"/addresses"}>مشاهده آدرس‌ها</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
