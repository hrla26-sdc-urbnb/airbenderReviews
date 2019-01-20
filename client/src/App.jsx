import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import styles from './styles/App.css';



function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      totalEntries: 0,
      oldReviews: [],
      accuracyAvg: 0,
      checkinAvg: 0,
      cleanlinessAvg: 0,
      communicationAvg: 0,
      locationAvg: 0,
      valueAvg: 0,
      finalAvg: 0,
      currentPage: 1,
      reviewsPerPage: 7,
      searchBar: null,
      isCurrentPage: false,
      isSearchFound: 1,
    };
    // this.getReviews = this.getReviews.bind(this);
    this.getReviewsById = this.getReviewsById.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNotFound = this.handleNotFound.bind(this);
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
    axios.get(`http://localhost:2019/reviews/${roomId}`)
    // axios.get(`http://localhost:2019/reviews/${roomId}`)
      .then((data) => {
        // console.log(`loaded all data for ${roomId}`, data.data, data.data.length);
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
          totalEntries: data.data.length,
          accuracyAvg: Math.ceil(finalAccuracy / data.data.length),
          checkinAvg: Math.ceil(finalCheckin / data.data.length),
          cleanlinessAvg: Math.ceil(finalCleanliness / data.data.length),
          communicationAvg: Math.ceil(finalCommunication / data.data.length),
          locationAvg: Math.ceil(finalLocation / data.data.length),
          valueAvg: Math.ceil(finalValue / data.data.length),
        });
        this.setState({ finalAvg: Math.ceil((this.state.accuracyAvg + this.state.checkinAvg + this.state.cleanlinessAvg + this.state.communicationAvg + this.state.locationAvg + this.state.valueAvg) / 6) });
      })
      .catch(err => console.error(err));
  }

  handleClickPage(e) {
    const { isCurrentPage } = this.state;
    this.setState({
      currentPage: Number(e.target.id),
      isCurrentPage: !isCurrentPage,
    });
  }

  handleChange(e) {
    // console.log('yo', e.key);
    let keyPress = e.key;
    let searchTerm = e.target.value;
    this.setState({ searchBar: searchTerm }, () => {
      if (keyPress === 'Enter') {
        // console.log('searched', e.target.value);
        this.handleSearch();
      }
    });
  }

  handleSearch() {
    // console.log('filter', this.state.searchBar);
    this.setState({ oldReviews: this.state.reviews})
    let filteredReviews = this.state.reviews.filter((element, i) => {
      return element.reviewContent.includes(this.state.searchBar);
    });
    this.setState({ reviews: filteredReviews, isSearchFound: 3, });
    if (filteredReviews.length < 1) {
      // console.log('searchBar not found');
      filteredReviews.push({ reviewContent: `None of our guests have mentioned "${this.state.searchBar}"` });
      this.setState({ isSearchFound: 2, });
    }
  }

  handleNotFound() {
    let { isSearchFound, oldReviews, reviews } = this.state;
    this.setState({ isSearchFound: 1, reviews: oldReviews });
  }


  // makePageArr() {
  //   let { pageNumbers, currentPage, reviewsPerPage } = this.state;
  //   const indexOfLastReview = currentPage * reviewsPerPage;
  //   const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  //   const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  //   let arr = for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  // }

  render() {
    // subdividing reviews
    const {
      reviews,
      totalEntries,
      accuracyAvg,
      currentPage,
      reviewsPerPage,
      checkinAvg,
      cleanlinessAvg,
      communicationAvg,
      locationAvg,
      valueAvg,
      finalAvg,
      isCurrentPage,
      isSearchFound,
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
        <li className={(num === currentPage) ? styles.isCurrentPage : styles.notCurrentPage } key={num} id={num} onClick={this.handleClickPage}>{num}</li>
      );
    });
    return (
      <div id={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.flexOne}>
          <div className={styles.noReviews}>
            {totalEntries}
            <span> Reviews</span>
          </div>
          <div className={styles.finalAvg}>
            <span className={styles.finalStar}>
              {[...Array(finalAvg)].map((e, i) => {
                return <span key={i}> &#9733; </span>;
              })}
            </span>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.flexThreeFive}>

          <div className={styles.flexStars}>
            <div className={styles.flexTwo}>
              <div className={styles.accuracyStar}>
              Accuracy
                <span className={styles.star}>
                  {[...Array(accuracyAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}>  &#9733;  </span>;
                  })}
                </span>
              </div>
              <div className={styles.communicationStar}>
              Communication
                <span className={styles.star}>
                  {[...Array(communicationAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className={styles.cleanlinessStar}>
              Cleanliness
                <span className={styles.star}>
                  {[...Array(cleanlinessAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
            </div>
            <div className={styles.flexThree}>
              <div className={styles.locationStar}>
              Location
                <span className={styles.star}>
                  {[...Array(locationAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className={styles.checkinStar}>
              Check-in
                <span className={styles.star}>
                  {[...Array(checkinAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
              <div className={styles.valueStar}>
              Value
                <span className={styles.star}>
                  {[...Array(valueAvg)].map((e, i) => {
                    return <span className={styles.singleStar} key={i}> &#9733; </span>;
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.misc}>
            <div className={styles.searchBar}>
              <img src="https://s3-us-west-1.amazonaws.com/mysuffering/search.png" alt="search" className={styles.materialIcons} />
              <input className={styles.input} type="text" placeholder="Search reviews" onKeyPress={this.handleChange} />
            </div>
            <select className={styles.dropDown}>
              <option>Most recent</option>
              <option>Most relevant</option>
            </select>
          </div>
        </div>

        <hr className={styles.divider} />
        <div className={styles.flexFour}>
          <ReviewList currentReviews={currentReviews} isSearchFound={isSearchFound} handleNotFound={this.handleNotFound} />
        </div>
        <ul className={styles.pageNumbers}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}