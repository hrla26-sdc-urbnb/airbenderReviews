import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewList = (props) => {
  const { currentReviews } = props;
  return (
    <ul>
      {console.log('yote', currentReviews[0])}
      {currentReviews.map((element) => {
        return <ReviewItem element={element} key={element.id} />;
      })}
    </ul>
  );
};

export default ReviewList;