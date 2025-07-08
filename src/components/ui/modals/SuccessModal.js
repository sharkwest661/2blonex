// src/components/ui/modals/SuccessModal.js
"use client";

const SuccessModal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="successModal"
      tabIndex="-1"
      aria-labelledby="successModalLabel"
      aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body">
            <div className="info">
              <img src="/img/success.svg" alt="" className="mb-10" />
              <h1 className="my-20">Şikayətiniz göndərildi</h1>
              <p className="mb-40">
                Bizə kömək etdiyiniz üçün sizə təşəkkür edirik! Şikayətinizə ən
                qısa zamanda baxılacaq.
              </p>
              <a
                href=""
                className="btn btn--full"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                aria-label="Close"
              >
                Bağla
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
