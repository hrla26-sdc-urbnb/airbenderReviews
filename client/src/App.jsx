import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      accuracyAvg: 0,
      checkinAvg: 0,
      cleanlinessAvg: 0,
      communicationAvg: 0,
      locationAvg: 0,
      valueAvg: 0,
      finalAvg: 0,
      currentPage: 1,
      reviewsPerPage: 7,
    };
    // this.getReviews = this.getReviews.bind(this);
    this.getReviewsById = this.getReviewsById.bind(this);
  }

  componentDidMount() {
    this.getReviewsById();
  }
  // renderPageNumber = () =>{
  // };

  // getReviews() {
  //   axios.get('/reviews')
  //     .then((data) => {
  //       console.log('loaded all data', data);
  //       this.setState({ reviews: data.data });
  //     })
  //     .catch(err => console.error(err));
  // }

  getReviewsById() {
    const roomId = generateRandomNumberBetween(11111, 11210);
    axios.get(`/reviews/${roomId}`)
      .then((data) => {
        console.log(`loaded all data for ${roomId}`, data);
        this.setState({ reviews: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { reviews } = this.state;
    // for (let i = 0; i < reviews.length; i++) {
    //   accuracyAvg += reviews[i].accuracyStar;
    // }
    // let accuracyCount = reviews.forEach((element) => {
      
    //   count += element.accuracyStar;
    // });
    return (
      <div id="reviews">
        <div>
          {reviews.length}
          <span> Reviews *****</span>
        </div>
        <input type="text" placeholder="Search reviews" />
        <div>breakline</div>
        <div>Accuracy ***** </div>
        <div>Communication ***** </div>
        <div>Cleanliness ***** </div>
        <div>Location ***** </div>
        <div>Check-in ***** </div>
        <div>Value ***** </div>
        <ReviewList allData={reviews} />
        <div className="review1">
          <div>
            userPic
          </div>
          <div>
            userId
          </div>
          <div>
            createdAt
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            reiciendis unde, illo qui sunt quam itaque vitae quos dolorem modi! Doloribus, ut!
            </p>
          </div>
        </div>
        <div className="review2">
          <div>
            userPic
          </div>
          <div>
            userId
          </div>
          <div>
            createdAt
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            reiciendis unde, illo qui sunt quam itaque vitae quos dolorem modi! Doloribus, ut!
            </p>
          </div>
        </div>
        <ul id="page numbers">
          page numbers
        </ul>
      </div>
    );
  }
}