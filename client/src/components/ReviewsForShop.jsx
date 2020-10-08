import React from 'react';
import ReviewsModal from './ReviewsModal.jsx'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ReviewsForShopContainer = styled.div`
  .ReviewsListForShop {
    padding: 9px;
    margin: 0px 0px 24px;
  }
  #review-shop-title {
    font-size: 13px;
    line-height: 18px;
    margin: 0px 6px 0px 0px;
    color: #595959;
  }
  #review-shop-purchasedPic {
    height:10%;
    width:4%;
    border-radius: 10%;
    cursor:pointer;
  }
  #review-shop-description {
    font-size: 13px;
    line-height: 18px;
    margin: 0px 6px 0px 0px;
    color: #595959;
    text-decoration: underline;
    transition: opacity 200ms ease-out;
    cursor:pointer;
  }
`;

const ReviewsForShop = (props) => {
  const {
    reviewsForShop, getRating, handleModalClick, handleClickIdShop,
  } = props;
  return (
    <ReviewsForShopContainer className="ReviewsForShopContainer">
      {reviewsForShop.map((review) => (
        <div className="ReviewsListForShop" key={review.id}>
          <div className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </div>
          <div className="review-rating-pic">
            <div className="review-rating-text">
              <div id="review-stars">{getRating(review.reviewRating)}</div>
              <p id="review-review-text">
                {review.review}
              </p>
            </div>
            <a  className="review-review-pic"  onClick={() => {handleModalClick(); handleClickIdShop(review.id);}} >
              <img className="review-review-pic" src={review.reviewPic} alt="" />
              <ReviewsModal />
            </a>
          </div>
          <div className="review-rating-text">
            <p id="review-shop-title">Purchased Item: </p>
            <div className="review-shop-pic/description">
              <img id="review-shop-purchasedPic" src={review.purchasedItemPic} alt="" /> <span id="review-shop-description"> {review.purchasedItemDescription} </span>
            </div>
          </div>
        </div>
      ))}
    </ReviewsForShopContainer>
  );
};
export default ReviewsForShop;
