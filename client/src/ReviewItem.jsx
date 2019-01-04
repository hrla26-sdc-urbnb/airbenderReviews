import React from 'react';
import '../dist/style.css';

const ReviewItem = (props) => {
  const { element } = props;
  return (
    <li className="reviewItem">
      <img className="proPic" src={element.userPic} alt={element.userName} />
      <span className="userName">{element.userName}</span>
      <div className="postTime">{element.shijian}</div>
      <span className="reviewbody">{element.reviewContent}</span>
      <hr className="divider" />
    </li>
  );
};

export default ReviewItem;