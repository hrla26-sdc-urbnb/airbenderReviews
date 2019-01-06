import React from 'react';
import styles from './styles/ReviewItem.css';

const ReviewItem = (props) => {
  const { element } = props;
  return (
    <li className={styles.reviewItem}>
      <img className={styles.proPic} src={element.userPic} alt={element.userName} />
      <div className={styles.userNameWithIcon}>
        <span className={styles.userName}>{element.userName}</span>
        <img className={styles.flagIcon} src="https://s3-us-west-1.amazonaws.com/mysuffering/flag.png" alt="flagIcon" />
      </div>
      <div className={styles.postTime}>{element.shijian}</div>
      <span className={styles.reviewBody}>{element.reviewContent}</span>
      <hr className={styles.divider} />
    </li>
  );
};

export default ReviewItem;