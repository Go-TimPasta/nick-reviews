import React from 'react';
import styled from 'styled-components';

const ReviewsModalContainer = styled.div`
  position:fixed;
  height: 650px;
  width: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: white;
  z-index: 601;
  border-radius: 10%;
  display: flex;
  flex-direction:row;
  overflow: hidden;

  .reviews-popup-info {
    padding: 18px 18px 18px 18px;
  }
  .reviews-popup-image {
    height:100%;
    width:60%;
  }
  .review-rating-text-modal {
    justify-self: space-around;
    flex-direction:row;
    align-self: flex-start;
    padding: 0px 0px 0px 48px;
    width: 100%;
    margin:0px 0px;
  }
  
`;

const OverlayStyle = styled.div`
  position:fixed;
  pointer-events:${(props) => (props.isOpen === true ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen === true ? '1' : '0')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 600;
`;

const ReviewsModal = (props) => {
  const { isOpen, handleModalClick, currentReview, getRating } = props;
  if (!isOpen) return null;
  return (
    <div>
      <ReviewsModalContainer>
        <img className="reviews-popup-image" src={currentReview.reviewPic} alt="" />
        <div className="reviews-popup-info">
          <div className="ReviewsListForItems" key={currentReview.id}>
            <p className="reviews-usertitle">
              <img src={currentReview.userPhoto} className="reviews-userphoto" alt="" />
              <span id="review-username">{currentReview.userName}</span>
              <span id="review-date">{currentReview.reviewDate}</span>
            </p>
            <div className="review-rating-pic">
              <div className="review-rating-text-modal">
                <div id="review-stars">{getRating(currentReview.reviewRating)}</div>
                <p id="review-review-text">
                  {currentReview.review}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ReviewsModalContainer>
      <OverlayStyle isOpen={isOpen} onClick={handleModalClick} />
    </div>
  );
};

export default ReviewsModal;
