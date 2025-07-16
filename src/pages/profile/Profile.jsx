import React, {useEffect} from "react";
import "../profile/profile.css";
import userImage from "../../assets/img/btb.jpg"; // make sure the path is correct
import {useSelector} from "react-redux";
import { useTranslation } from "../../store/translation";

const Profile = () => {
  const form = useSelector((state) => state.form);
        const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
    console.log("Form changed:", {name, phone, email, subject, message});


  }, []);
  const {name, phone, email, subject, message} = form;

  return (
    <div className="form-container-profile">
      <h2>{t('my_account')}</h2>

      <div className="profile">
        <img src={userImage} alt="User" />
      </div>

      <form className="form-profile">
        <div className="row-profile">
          <div className="field">
            <label>{t('name')}:</label>
            <input type="text" value={name} disabled />
          </div>
          <div className="field">
            <label>{t('phone number')}:</label>
            <input type="text" value={phone} disabled />
          </div>
        </div>

        <div className="field">
          <label>Email:</label>
          <input type="email" value={email} disabled />
        </div>

        <div className="field">
          <label>{t('t-shirts name')}:</label>
          <input type="text" value={subject} disabled />
        </div>

        <div className="field">
          <label>{t('message')}:</label>
          <textarea rows="6" disabled>
            {message ? message : "Empty"}
          </textarea>
        </div>
      </form>
    </div>
  );
};


export default Profile;
