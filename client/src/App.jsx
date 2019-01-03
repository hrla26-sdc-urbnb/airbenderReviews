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
    this.handleClickPage = this.handleClickPage.bind(this);
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
        console.log(`loaded all data for ${roomId}`, data.data, data.data.length);
        // getting and averaging each star
        let finalAccuracy = 0;
        let finalCheckin = 0;
        let finalCleanliness = 0;
        let finalCommunication = 0;
        let finalLocation = 0;
        let finalValue = 0;
        for (let i = 0; i < data.data.length; i++) {
          finalAccuracy += data.data[i].accuracyStar;
          finalCheckin += data.data[i].checkinStar;
          finalCleanliness += data.data[i].cleanlinessStar;
          finalCommunication += data.data[i].communicationStar;
          finalLocation += data.data[i].locationStar;
          finalValue += data.data[i].valueStar;
        }
        this.setState({
          reviews: data.data,
          accuracyAvg: Math.ceil(finalAccuracy / data.data.length),
          checkinAvg: Math.ceil(finalCheckin / data.data.length),
          cleanlinessAvg: Math.ceil(finalCleanliness / data.data.length),
          communicationAvg: Math.ceil(finalCommunication / data.data.length),
          locationAvg: Math.ceil(finalLocation / data.data.length),
          valueAvg: Math.ceil(finalValue / data.data.length),
        });
        this.setState({ finalAvg: Math.ceil((this.state.accuracyAvg + this.state.checkinAvg + this.state.cleanlinessAvg + this.state.communicationAvg + this.state.locationAvg + this.state.valueAvg) / 6), });
        console.log('yeet yaw', this.state.valueAvg);
      })
      .catch(err => console.error(err));
  }

  handleClickPage(e) {
    this.setState({
      currentPage: Number(e.target.id),
    });
  }

  render() {
    // subdividing reviews
    const {
      reviews,
      accuracyAvg,
      currentPage,
      reviewsPerPage,
      checkinAvg,
      cleanlinessAvg,
      communicationAvg,
      locationAvg,
      valueAvg,
      finalAvg,
    } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    // paginate
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((num) => {
      return (
        <li className="pagination" key={num} id={num} onClick={this.handleClickPage}>{num}</li>
      );
    });
    // for (let i = 0; i < reviews.length; i++) {
    //   accuracyAvg += reviews[i].accuracyStar;
    // }
    // let accuracyCount = reviews.forEach((element) => {
    //   count += element.accuracyStar;
    // });
    return (
      <div id="reviews">
        <hr className="divider" />
        <div className="flexOne">
          <div className="noReviews">
            {reviews.length}
            <span> Reviews</span>
          </div>
          <div className="finalAvg">
            <span className="finalStar">
              {[...Array(finalAvg)].map((e, i) => {
                return <span key={i}> &#9733; </span>;
              })}
            </span>
          </div>
        </div>
        <hr className="divider" />
        <div className="flexThreeFive">

          <div className="flexStars">
            <div className="flexTwo">
              <div className="accuracyStar">
              Accuracy
                <span className="star">
                  {[...Array(accuracyAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}>  &#9733;  </span>;
                  })}
                </span>
              </div>
              <div className="communicationStar">
              Communication
                <span className="star">
                  {[...Array(communicationAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className="cleanlinessStar">
              Cleanliness
                <span className="star">
                  {[...Array(cleanlinessAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
            </div>
            <div className="flexThree">
              <div className="locationStar">
              Location
                <span className="star">
                  {[...Array(locationAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className="checkinStar">
              Check-in
                <span className="star">
                  {[...Array(checkinAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className="valueStar">
              Value
                <span className="star">
                  {[...Array(valueAvg)].map((e, i) => {
                    return <span className="singleStar" key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="misc">
            <div className="searchBar">
              <i className="material-icons">
              search
              </i>
              <input className="input" type="text" placeholder="Search reviews" />
            </div>
            <select className="dropDown">
              <option>Most relevant</option>
              <option>Most recent</option>
            </select>
          </div>
        </div>

        <hr className="divider" />
        <div className="flexFour">
          <ReviewList currentReviews={currentReviews} />
        </div>
        <ul className="pageNumbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}