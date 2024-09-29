import Image from "next/image";
import { useState } from "react";

const UserInfo = ({ setData, setActiveComponent }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    coordinateMobile: "",
    coordinatePhoneNumber: "",
    address: "",
    gender: "male",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    coordinateMobile: "",
    coordinatePhoneNumber: "",
    address: "",
    gender: "",
  });

  const handleClear = (name) => {
    setFormData({
      ...formData,
      [name]: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length < 3) {
          error = "حداقل باید 3 حرف باشد";
        }
        break;
      case "coordinateMobile":
        if (!/^09\d{9}$/.test(value)) {
          error = "شماره تلفن همراه نامعتبر است";
        }
        break;
      case "coordinatePhoneNumber":
        if (value && !/^(0[1-8]{2,3})\d{7,8}$/.test(value)) {
          error: "شماره تلفن ثابت نامعتبر است";
        }
        break;
      case "address":
        if (value.length < 10) {
          error = "آدرس باید حداقل ۱۰ حرف باشد";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...error,
      [name]: error,
    });
  };

  const validateForm = () => {
    const fields = [
      "firstName",
      "lastName",
      "coordinateMobile",
      "coordinatePhoneNumber",
      "address",
    ];
    let valid = true;

    fields.forEach((field) => {
      if (!formData[field] || errors[field]) {
        valid = false;
        validateField(field, formData[field]);
      }
    });

    return valid;
  };

  const handleSubmitForm = () => {
    if (validateForm()) {
      setData(formData);
      setActiveComponent("location");
    } else {
      console.log("داده‌ها معتبر نیستند، ارسال انجام نشد.");
    }
  };

  const getInputStyle = (name) => {
    if (errors[name]) {
      return "error-border";
    } else if (formData[name]) {
      return "success-border";
    }
    return "";
  };

  return (
    <div className="user-info">
      <div className="container">
        <div className="form">
          <div className="form-head">
            <span>ثبت آدرس</span>
          </div>
          <div className="form-self">
            <span className="head">لطفا مشخصات و آدرس خود را وارد کنید</span>
            <div className="inputs grid grid-cols-1 lg:grid-cols-3">
              <div className="input-group mb-xl-38 ml-xl-22">
                <label htmlFor="firstName">نام</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="مثال: محمد"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${getInputStyle("firstName")}`}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
                <Image
                  className="clear-icon"
                  src={"/icons/clear-icon.svg"}
                  width={16}
                  height={16}
                  alt="clear-icon"
                  onClick={() => handleClear("firstName")}
                />
              </div>
              <div className="input-group mb-xl-38 ml-xl-22">
                <label htmlFor="lastName">نام خانوادگی</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="مثال: رضایی"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${getInputStyle("lastName")}`}
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
                <Image
                  className="clear-icon"
                  src={"/icons/clear-icon.svg"}
                  width={16}
                  height={16}
                  alt="clear-icon"
                  onClick={() => handleClear("lastName")}
                />
              </div>
              <div className="input-group mb-xl-38">
                <label htmlFor="coordinateMobile">شماره تلفن همراه</label>
                <input
                  type="text"
                  name="coordinateMobile"
                  id="coordinateMobile"
                  placeholder="مثال: 09121234567"
                  value={formData.coordinateMobile}
                  onChange={handleChange}
                  className={`${getInputStyle("coordinateMobile")}`}
                />
                {errors.coordinateMobile && (
                  <span className="error-message">
                    {errors.coordinateMobile}
                  </span>
                )}
                <Image
                  className="clear-icon"
                  src={"/icons/clear-icon.svg"}
                  width={16}
                  height={16}
                  alt="clear-icon"
                  onClick={() => handleClear("coordinateMobile")}
                />
              </div>
              <div className="input-group mb-xl-52 ml-xl-22">
                <label
                  className="label-home-phone"
                  htmlFor="coordinatePhoneNumber"
                >
                  <span>شماره تلفن ثابت (اختیاری)</span>
                  <span className="mini">*با پیش شماره</span>
                </label>
                <input
                  type="text"
                  name="coordinatePhoneNumber"
                  id="coordinatePhoneNumber"
                  placeholder="مثال: 02144256780"
                  value={formData.coordinatePhoneNumber}
                  onChange={handleChange}
                  className={`${getInputStyle("coordinatePhoneNumber")}`}
                />
                {errors.coordinatePhoneNumber && (
                  <span className="error-message">
                    {errors.coordinatePhoneNumber}
                  </span>
                )}
                <Image
                  className="clear-icon"
                  src={"/icons/clear-icon.svg"}
                  width={16}
                  height={16}
                  alt="clear-icon"
                  onClick={() => handleClear("coordinatePhoneNumber")}
                />
              </div>
              <div className="input-group lg:col-span-2 mb-xl-52">
                <label htmlFor="address">آدرس</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`${getInputStyle("address")}`}
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
                <Image
                  className="clear-icon"
                  src={"/icons/clear-icon.svg"}
                  width={16}
                  height={16}
                  alt="clear-icon"
                  onClick={() => handleClear("address")}
                />
              </div>
              <div className="input-radio-group">
                <span className="title">جنسیت</span>
                <p className="gender-item">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" style={{ marginLeft: "40px" }}>
                    آقا
                  </label>
                </p>
                <p className="gender-item">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female">خانم</label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit-form-btn">
        <button className="btn-self" onClick={handleSubmitForm}>
          ثبت و ادامه
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
