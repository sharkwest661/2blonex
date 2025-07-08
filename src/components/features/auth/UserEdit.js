"use client";

import { useState } from "react";
import style from "./userEdit.module.css";

const UserEdit = () => {
  const [formData, setFormData] = useState({
    name: "Rüstəm",
    email: "elmir.latifov@gmail.com",
    mobile: "051-555-85-69",
  });

  const [errors, setErrors] = useState({});

  // Phone number validation for format: 051-555-85-69
  const validatePhoneNumber = (value) => {
    const phoneRegex = /^0[1-9][0-9]-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (!value) {
      return "Telefon nömrəsi tələb olunur";
    }

    if (!phoneRegex.test(value)) {
      return "Düzgün telefon nömrəsi daxil edin (0**-***-**-**)";
    }

    return true;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }

    // Validate phone number on change
    if (id === "mobile") {
      const validation = validatePhoneNumber(value);
      if (validation !== true) {
        setErrors({ ...errors, [id]: validation });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number before submission
    const phoneValidation = validatePhoneNumber(formData.mobile);
    if (phoneValidation !== true) {
      setErrors({ ...errors, mobile: phoneValidation });
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className={`${style.customCol}`}>
            <h1>Məlumatların redaktəsi</h1>
            <form onSubmit={handleSubmit}>
              <div className="pb-15">
                <div className="form-group">
                  <label htmlFor="name">Ad</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Elektron poçt</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobil telefon</label>
                  <input
                    type="text"
                    id="mobile"
                    className={`form-control ${
                      errors.mobile ? "is-invalid" : ""
                    }`}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="055-262-65-00"
                  />
                  {errors.mobile && (
                    <div className="invalid-feedback">{errors.mobile}</div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${style.btnSave}`}
                data-toggle="modal"
                data-target="#saveModal"
              >
                <img src="/img/submit-icon.svg" alt="" className="mr-2" />
                Yadda saxla
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserEdit;
