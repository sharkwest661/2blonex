// src/components/features/product/ReviewSection.js
"use client";
import { useState } from "react";

const ReviewSection = ({ reviews = [] }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxLength = 3000;

  const handleReviewChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setReviewText(text);
      setCharCount(text.length);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      // Handle review submission
      console.log("Submitting review:", reviewText);
      setReviewText("");
      setCharCount(0);
      setShowReviewForm(false);
    }
  };

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="review">
      <div className="review__inner">
        {/* Review Form */}
        {showReviewForm ? (
          <div className="review__form">
            <form onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label htmlFor="review">Şərh yaz</label>
                <div className="textarea-group">
                  <textarea
                    name="review"
                    id="review"
                    className="form-control form-textarea"
                    rows="5"
                    maxLength={maxLength}
                    value={reviewText}
                    onChange={handleReviewChange}
                    placeholder="Şərhinizi buraya yazın..."
                  />
                  <small className="textarea-counter">
                    <span>{charCount}</span> hərf
                  </small>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn--icon btn--short ml-auto"
                disabled={!reviewText.trim()}
              >
                <img src="/img/review_submit-icon.svg" alt="review-icon" />
                Paylaş
              </button>
            </form>
          </div>
        ) : (
          /* Review Button */
          <a
            href=""
            className="btn btn--icon btn--short review__btn"
            onClick={(e) => {
              e.preventDefault();
              toggleReviewForm();
            }}
          >
            <img src="/img/review_add-icon.svg" alt="review-icon" />
            Şərh yaz
          </a>
        )}
      </div>

      {/* Reviews Toggle */}
      <div>
        <a
          className="review__toggler"
          href="#reviews"
          role="button"
          aria-expanded={showReviews}
          aria-controls="reviews"
          onClick={(e) => {
            e.preventDefault();
            toggleReviews();
          }}
        >
          <span>Şərhlər ({reviews.length})</span>
        </a>

        {/* Reviews List */}
        <div className={`collapse ${showReviews ? "show" : ""}`} id="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review__item">
              <div className="review__header">
                <span className="review__author">{review.author}</span>
                <span>{review.date}</span>
              </div>
              <div className="review__body">{review.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
