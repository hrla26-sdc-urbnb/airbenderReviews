import React from 'react';

const ReviewItem = (props) => {
  const { element } = props;
  return (
    <li>
      <img src={element.userPic} alt={element.userName} />
      {element.userName}
      {element.shijian}
      {element.reviewContent}
    </li>
  );
};

export default ReviewItem;