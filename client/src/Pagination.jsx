// have not had time to refactor more things into components

// import React from 'react';

// export default class Pagination extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 1,
//       reviewsPerPage: 5, 
//       isCurrentPage: false,
//       pageNumbers: [],
//     };
//   }
  
//   makePageArr() {
//     let { pageNumbers, currentPage, reviewsPerPage } = this.state;
//     let { currentReviews } = this.props;
//     const indexOfLastReview = currentPage * reviewsPerPage;
//     const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
//     currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

//   }

//   render() {
//     return(

//     );
//   }
// }