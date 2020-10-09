import React from 'react';
import styled from 'styled-components';
import { FaStar, FaCaretDown, FaCheck } from 'react-icons/fa';

const ReviewsHeaderContainer = styled.div`
  .reviews-total {
    display:flex;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.35px;
    font-size: 26px;
    font-weight: 300;
    color: #222222;
  }
  #reviews-title-stars {
    margin: 3px 0px 0px 12px;
    font-size:20px;
    font-weight:300;
  }
  .reviews-tab-list {
    border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  }
  .reviewsTabItem {
    font-size: 16px;
    line-height: 22.4px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
    border-bottom:  ${(props) => (props.reviewsTab === 'reviewsItem' ? '2px solid;' : '2px solid rgba(34, 34, 34, 0.15);')};
    border-color: ${(props) => (props.reviewsTab === 'reviewsItem' ? '#222222;' : 'none')};
    margin-bottom: -1px;
    outline: none;
  }
  .reviewsTabShop {
    font-size: 16px;
    line-height: 22.4px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
    border-bottom:  ${(props) => (props.reviewsTab === 'reviewsShop' ? '2px solid;' : '2px solid rgba(34, 34, 34, 0.15);')};
    border-color: ${(props) => (props.reviewsTab === 'reviewsShop' ? '#222222;' : 'none')};
    outline: none;
  }
  .reviewsTabShop:hover{
    border-bottom: 2px solid;
    border-color: #222222;
    transition: 1s;
  }
  .reviewsTabItem:hover{
    border-bottom: 2px solid;
    border-color: #222222;
    transition: 1s;
  }
  #reviews-ratings {
    font-size:13px;
    line-height: 13px;
    background-color: #2222;
    margin: 0px 0px 0px 12px;
    padding: 6px 9px;
    border-radius: 45%;
  }
  .reviews-sort {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 13px;
    line-height: 18.2px;
    margin: 0px 12px 0px 0px;
    padding: 9px 15px;
  }
  .reviews-sort-items {
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    background:white;
    border-radius: 24px;
    border: ${(props) => (props.dropdown === false ? 'none;' : '2px solid rgba(34, 34, 34, 0.15);')}; 
  }
  .reviews-sort-title {
    cursor: pointer;
    background: white;
    font-weight: 500;
    border:none;
    padding: 9px 15px;
    border-radius: 24px;
    outline: none;
  }
  .reviews-sort-title:hover {
    background-color: ${(props) => (props.dropdown === false ? '#2222;' : 'white;')};
  }
  .reviews-dropdown-content {
    flex-direction:row;
    font-weight: 300;
    font-color: #222222;
    display: ${(props) => (props.dropdown === false ? 'none;' : 'flex;')};
    flex-direction: ${(props) => (props.dropdown === false ? 'none;' : 'column;')};
    cursor:pointer;
    padding: 12px 18px;
  }
  .reviews-sort-dropdown-1{
    color:#222222;
  }
  .reviews-sort-dropdown-2{
    color:#222222;
  }
  .reviews-sort-dropdown-1:hover {
    background-color: #2222;
  }
  .reviews-sort-dropdown-2:hover {
    background-color: #2222;
  }
  #reviews-dropdown-check {
    margin: 0px 0px 0px 75px;
  }
`;

const ReviewsHeader = (props) => {
  const {
    reviewsForItem, reviewsForShop, reviewsTab, handleClick, handleSortClick,
    handleDropdown, dropdown, handleSortNewest, handleSortRecommended, sortName,
  } = props;
  if (sortName === 'Newest') {
    return (
      <ReviewsHeaderContainer reviewsTab={reviewsTab} dropdown={dropdown} className="ReviewsHeaderContainer">
        <div>
          <h3 className="reviews-total">
            {reviewsForShop.length} reviews <span id="reviews-title-stars"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span>
          </h3>
          <div className="reviews-tab-items">
            <div className="reviews-tab-list" id="reviews-tab-list">
              <button type="button" className="reviewsTabItem" tabIndex="0" role="tab" value="reviewsItem" onClick={handleClick}>Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
              <button type="button" className="reviewsTabShop" tabIndex="0" role="tab" value="reviewsShop" onClick={handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
            </div>
          </div>
        </div>
        <div className="reviews-sort">
          <div className="reviews-sort-items">
            <button type="button" className="reviews-sort-title" onClick={handleDropdown}>
              Sort by: {sortName} <FaCaretDown />
            </button>
            <div className="reviews-dropdown-content">
              <div className="reviews-sort-dropdown-1" onClick={handleSortRecommended}>Recommended</div>
              <br></br>
              <div className="reviews-sort-dropdown-2"onClick={handleSortNewest}>Newest <span id="reviews-dropdown-check"><FaCheck/></span></div>
            </div>
          </div>
        </div>
      </ReviewsHeaderContainer>
    );
  }
  return (
    <ReviewsHeaderContainer reviewsTab={reviewsTab} dropdown={dropdown} className="ReviewsHeaderContainer">
      <div>
        <h3 className="reviews-total">
          {reviewsForShop.length} reviews <span id="reviews-title-stars"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span>
        </h3>
        <div className="reviews-tab-items">
          <div className="reviews-tab-list" id="reviews-tab-list">
            <button type="button" className="reviewsTabItem" tabIndex="0" role="tab" value="reviewsItem" onClick={handleClick}>Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
            <button type="button" className="reviewsTabShop" tabIndex="0" role="tab" value="reviewsShop" onClick={handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
          </div>
        </div>
      </div>
      <div className="reviews-sort">
        <div className="reviews-sort-items">
          <button type="button" className="reviews-sort-title" onClick={handleDropdown}>
            Sort by: {sortName} <FaCaretDown />
          </button>
          <div className="reviews-dropdown-content">
            <a className="reviews-sort-dropdown-1" onClick={handleSortRecommended}>Recommended <span id="reviews-dropdown-check"><FaCheck/></span></a>
            <br></br>
            <a className="reviews-sort-dropdown-2"onClick={handleSortNewest}>Newest</a>
          </div>
        </div>
      </div>
    </ReviewsHeaderContainer>
  );
};

export default ReviewsHeader;
