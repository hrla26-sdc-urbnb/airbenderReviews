import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import styles from './styles/ReviewList.css';

const ReviewList = (props) => {
  const { currentReviews, isSearchFound, handleNotFound } = props;
  if (isSearchFound === 2) {
    // console.log('yeet', isSearchFound);
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
  
  if (isSearchFound === 3) {
    // console.log('yeet', isSearchFound);
    return (
      <div className={styles.searchFound}>
        <span className={styles.notFoundButton} onClick={handleNotFound}>
          Back to all reviews
        </span>
        <hr className={styles.divider} />
        <ul className={styles.reviewList}>
          {currentReviews.map((element) => {
            return <ReviewItem element={element} key={element.id} />;
          })}
        </ul>
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