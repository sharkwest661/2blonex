// src/components/ui/modals/ComplaintModal.js
"use client";
import { useState } from "react";

const ComplaintModal = ({ isOpen, onClose, onSuccess }) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState(
    "Çox babat telefondu. arada bir dinamiki xarab olur dişimlə sıxıram telefonu düzəlir. Suya düşəndə düyünün içində quruduram 2 dəfə elə düzəltmişəm. Daş döyən telefondu."
  );
  const [charCount, setCharCount] = useState(0);
  const maxLength = 3000;

  const complaintReasons = [
    "Şikayətin səbəbi",
    "Şikayətin səbəbi2",
    "Şikayətin səbəbi3",
    "Şikayətin səbəbi4",
  ];

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setDescription(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reason && description.trim()) {
      // Handle complaint submission
      console.log("Complaint submitted:", { reason, description });
      onSuccess();
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="complaintModal"
      tabIndex="-1"
      aria-labelledby="complaintModalLabel"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">Şikayət</span>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="reason">Şikayətin səbəbi</label>
                <select
                  name="reason"
                  id="reason"
                  className="selectpicker form-control"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                >
                  <option value="">Seçin</option>
                  {complaintReasons.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="info">Açıqlama mətni</label>
                <div className="textarea-group">
                  <textarea
                    name="info"
                    id="info"
                    className="form-control form-textarea"
                    rows="5"
                    maxLength={maxLength}
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                  <small className="textarea-counter">
                    <span>{charCount}</span> hərf
                  </small>
                </div>
              </div>
              <button type="submit" className="btn btn--yellow">
                Təsdiqlə
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintModal;
