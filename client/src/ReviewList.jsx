import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const ReviewList = (props) => {
  const { allData } = props;
  return (
    <ul>
      {console.log('yote', allData[0])}
      {allData.map((element) => {
        return <ReviewItem element={element} key={element.id} />;
      })}
    </ul>
  );
};

export default ReviewList;