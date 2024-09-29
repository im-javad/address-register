const Address = ({ address }) => {
  return (
    <div className="address grid grid-cols-1 lg:grid-cols-4">
      <div className="full-name">
        <span>نام و نام خانوادگی</span>
        <strong>محمد محمدی</strong>
      </div>
      <div className="first-name">
        <span>نام</span>
        <strong>{address.first_name}</strong>
      </div>
      <div className="last-name">
        <span>نام خانوادگی</span>
        <strong>{address.last_name}</strong>
      </div>
      <div className="phone-number lg:col-span-2">
        <span>شماره تلفن همراه</span>
        <strong>{address.coordinate_mobile}</strong>
      </div>
      <div className="home-phone">
        <span>شماره تلفن ثابت</span>
        <strong>
          {address.coordinate_phone_number
            ? address.coordinate_phone_number
            : "Not Set"}
        </strong>
      </div>
      <div className="gender">
        <span>جنسیت</span>
        <strong>{address.gender ? address.gender : "Not Set"}</strong>
      </div>
      <div className="address-content lg:col-span-2">
        <span>آدرس</span>
        <strong>{address.address}</strong>
      </div>
    </div>
  );
};

export default Address;
