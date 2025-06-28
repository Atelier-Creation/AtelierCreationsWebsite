import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews";
import "./reviews.css"; // see sample rules below

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      {/* —— Holder 0 —— */}
      <div className="reviews-row reviews-row--0">
        {reviews.slice(0, 2).map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {/* —— Holder 5 —— */}
      <div className="reviews-row reviews-row--5">
        {reviews.slice(2, 4).map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {/* —— Holder 1 —— */}
      <div className="reviews-row reviews-row--1">
        {reviews.slice(4, 6).map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {/* —— Holder 2 —— */}
      <div className="reviews-row reviews-row--2">
        {reviews.slice(6, 8).map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
