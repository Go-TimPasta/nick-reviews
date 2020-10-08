import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PaginationContainer = styled.nav`
  margin: 20px 0px 36px;
  align-items: center;
  .reviews-pagination {
    display:inline-flex;
    list-style: none;
    padding: 0px 0px 0px 0px;
  }
  .reviews-page-link {
    list-style: none;
    font-size: 13px;
    line-height: 18.2px;
    color: #222222;
    padding: 10px 15px;
    margin-right:4px;
    border-radius: 50%;
    border: none;
    outline:none;
    cursor: pointer;
  }
  .reviews-page-period {
    align-self:flex-end;
  }
  .reviews-page-link-current {
    list-style: none;
    font-size: 13px;
    line-height: 18.2px;
    background: rgba(34, 34, 34, 0.4);
    padding: 10px 15px;
    margin-right:4px;
    border:none;
    border-radius: 50%;
    outline:none;
    cursor:pointer;
  }
`;

const Pagination = (props) => {
  const { reviewsPerPage, totalReviews, paginate, currentPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const previous = currentPage - 1;
  const next = currentPage + 1;
  const firstPage = 1;
  const secondPage = 2;
  const lastPage = pageNumbers.length;

  if (currentPage === 1) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link-current">1</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(secondPage)} className="reviews-page-link">2</button>
          </li>
          <li className="reviews-page-period">... </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="reviews-page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(next)} className="reviews-page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === 2) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="reviews-page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="reviews-page-link">1</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link-current">2</button>
          </li>
          <li className="reviews-page-period">... </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="reviews-page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(next)} className="reviews-page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === lastPage - 1) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(previous)} className="reviews-page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="reviews-page-link">1</button>
          </li>
          <li className="reviews-page-period">... </li>
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link-current">{currentPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="reviews-page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="reviews-page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === lastPage) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(previous)} className="reviews-page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="reviews-page-link">1</button>
          </li>
          <li className="reviews-page-period">... </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage - 1)} className="reviews-page-link">{currentPage - 1}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link-current">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="reviews-page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  return (
    <PaginationContainer className="PaginationContainer">
      <ul className="reviews-pagination">
        <li className="reviews-page-item">
          <button className="reviews-page-link" type="button" onClick={() => paginate(previous)}><FaArrowLeft /></button>
        </li>
        <li className="reviews-page-item">
          <button className="reviews-page-link" type="button" onClick={() => paginate(firstPage)}>1</button>
        </li>
        <li className="reviews-page-period">... </li>
        <li className="reviews-page-item">
          <button className="reviews-page-link-current" type="button">{currentPage}</button>
        </li>
        <li className="reviews-page-period">... </li>
        <li className="reviews-page-item">
          <button className="reviews-page-link" type="button" onClick={() => paginate(lastPage)}>{lastPage}</button>
        </li>
        <li className="reviews-page-item">
          <button className="reviews-page-link" type="button" onClick={() => paginate(next)} ><FaArrowRight /></button>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
