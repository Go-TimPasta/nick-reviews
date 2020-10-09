import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ReviewsModal from './ReviewsModal.jsx'

const ReviewsPhotoCarouselContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight:300;
  margin: 0px 0px 12px 0px;
  .reviews-carousel {
    position: relative;
    display:flex;
    align-content: center;
    overflow:hidden;
    width: 100%;
    max-width: 770px;
    min-width: 770px;
    min-height:185px;
  }
  .reviews-carousel-title {
    margin: 0px 0px 12px;
  }

  .reviews-carousel-item {
    padding: 0px 9px 0px 0px;
    transition: .5s;
  }
  .reviews-carousel-pic {
    height: 14vw;
    width: 14vw;
    cursor:pointer;
    border-radius:10%;
    max-width:185px;
    max-height:185px;
    min-width:185px;
    min-height:185px;
  }

  #reviews-carousel-btn-left {
    font-size: 24px;
    font-color:#222222;
    position: absolute;
    left: 0;
    margin: 0px 0px 0px 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius: 50%;
    outline: none;
    cursor:pointer;
    display:grid;
    place-items: center;
    display: ${(props) => (props.x === 0 ? 'none;' : 'block;')};
  }
  #reviews-carousel-btn-right {
    font-size: 24px;
    font-color:#222222;
    font-weight:100px;
    position: absolute;
    right: 0;
    margin: 0px 10px 0px 0px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius:50%;
    outline: none;
    cursor:pointer;
    display: ${(props) => (props.x === -100 * (props.reviewsForItem.length) + 400 ? 'none' : '')};
  }
 .reviews-carousel-btn-arrow-left {
    position: relative;
    top: 2px;
    right: 2px;
  }
  .reviews-carousel-btn-arrow-right {
    position: relative;
    top: 2px;
  }
`;

const ReviewsPhotoCarousel = (props) => {
  const {
    reviewsForItem, handleModalClick, handleClickIdItem, x, goLeft, goRight,
  } = props;

  return (
    <ReviewsPhotoCarouselContainer x={x} reviewsForItem={reviewsForItem} className="ReviewsPhotoCarouselContainer">
      <div className="reviews-carousel-title">Photos from reviews</div>
      <div className="reviews-carousel">
        {reviewsForItem.map((review) => (
          <div className="reviews-carousel-item" key={review.id} style={{ transform: `translateX(${x}%)` }}>
            <a className="reviews-carousel-pic"  onClick={() => {handleModalClick(); handleClickIdItem(review.id);}} >
              <img className="reviews-carousel-pic" src={review.reviewPic} alt="" />
              <ReviewsModal />
            </a>
          </div>
        ))}
        <button type="button" id="reviews-carousel-btn-left" onClick={goLeft}>
          <FaAngleLeft className="reviews-carousel-btn-arrow-left" />
        </button>
        <button type="button" id="reviews-carousel-btn-right" onClick={() => { goRight(); }}><FaAngleRight className="reviews-carousel-btn-arrow-right" /></button>
      </div>

    </ReviewsPhotoCarouselContainer>
  );
};

export default ReviewsPhotoCarousel;
