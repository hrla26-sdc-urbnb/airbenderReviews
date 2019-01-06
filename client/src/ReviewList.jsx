import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import styles from './styles/ReviewList.css';

const ReviewList = (props) => {
  const { currentReviews, isSearchFound, handleNotFound } = props;
  if (isSearchFound === false) {
    return (
      <div className={styles.searchNotFound}>
        <span className={styles.reviewNotFound}>
          {currentReviews[0].reviewContent}
        </span>
        <span className={styles.buttonContainer}>
          <span className={styles.notFoundButton} onClick={handleNotFound}>
          Back to all reviews
          </span>
        </span>
      </div>
    );
  }
  return (
    <ul className={styles.reviewList}>
      {currentReviews.map((element) => {
        return <ReviewItem element={element} key={element.id} />;
      })}
    </ul>
  );
};

export default ReviewList;