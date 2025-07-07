"use client";

import { useState } from "react";
import style from "./userEdit.module.css";

const UserEdit = () => {
  const [formData, setFormData] = useState({
    name: "Rüstəm",
    email: "elmir.latifov@gmail.com",
    mobile: "051-123-45-67",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    className="form-control"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${style.btnSave}`}
                data-toggle="modal"
                data-target="#saveModal"
              >
                <img
                  src="/img/submit-icon.svg"
                  alt=""
                  className="mr-2"
                />
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