import React from "react";
import starSvg from "./star.svg"; // download once & import locally

export default function ReviewCard({ review }) {
  const { name, role, rating, quote, variant } = review;

  return (
    <div className={`review-card review-card--${variant}`}>
      <div className={`review-card__ellipse review-card__ellipse--${variant}`} />
      <div className="review-card__content">
        <div className="review-card__topRow">
          <span className="review-card__name">{name}</span>
          <span className="review-card__separator">|</span>
          <span className="review-card__role">{role}</span>
        </div>

        <div className="review-card__rating">
          <span className="review-card__ratingValue">{rating}</span>
          <img
            src={starSvg}
            alt="star icon"
            width={12}
            height={12}
            loading="lazy"
            className="review-card__star"
          />
        </div>

        <p className="review-card__quote">“{quote}”</p>
      </div>
    </div>
  );
}
