import React, { useState } from 'react';
import '../App.css'


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5); // Default rating of 5

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      text: newReview,
      rating: newReviewRating,
    };
    setReviews([...reviews, reviewData]);
    setNewReview('');
    setNewReviewRating(5); // Reset rating to default
  };

  const renderReviews = () => {
    return reviews.map((review, index) => (
      <div key={index} className="review">
        <div className="review-header">
          <span className="user-name">User {index + 1}</span>
          <span className="rating">Rating: {review.rating} / 5</span>
        </div>
        <p className="review-text">{review.text}</p>
      </div>
    ));
  };

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="existing-reviews">
        {reviews.length > 0 ? (
          renderReviews()
        ) : (
          <p>No reviews yet. Be the first to write one!</p>
        )}
      </div>
      <div className="new-review">
        <h3>Write a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <input
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Your review here..."
          />
          <div className="rating-input">
            <label>Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={newReviewRating}
              onChange={(e) => setNewReviewRating(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;