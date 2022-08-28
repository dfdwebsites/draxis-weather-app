import React, { useEffect, useState } from 'react';
import { getFormatedDate } from '../utils';
import PropTypes from 'prop-types';

export default function DateNavigation({ setDay, data }) {
  /* {' '}
    {new Date((data.daily[1].dt + data.timezone_offset) * 1000)
    .toDateString()
    .slice(0, -4)} */

  const handleMobileClick = (e) => {
    document.querySelector('.date-nav').classList.toggle('open');
    e.target.parentElement.classList.toggle('open');
  };

  const [allBtns, setAllBtns] = useState(null);
  useEffect(() => {
    setAllBtns([...document.querySelectorAll('.nav-btn')]);
  }, []);

  const handleClick = (e, data) => {
    allBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    document.querySelector('.date-nav').classList.contains('open') &&
      document.querySelector('.date-nav').classList.remove('open');
    document.querySelector('.menu-btn').classList.contains('open') &&
      document.querySelector('.menu-btn').classList.remove('open');
    setDay(data);
  };

  return (
    <>
      <div className="mobile-menu">
        <button className="menu-btn " onClick={handleMobileClick}>
          <span>Change date </span> <i className="fas fa-calendar-alt"></i>
        </button>
      </div>
      <div className="date-nav">
        <button
          className="nav-btn active"
          onClick={(e) => handleClick(e, data.current)}
        >
          Today
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[1])}
        >
          Tommorow
        </button>
        <div className="toggle-bar"></div>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[2])}
        >
          {getFormatedDate(data.daily[2].dt * 1000)}
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[3])}
        >
          {' '}
          {getFormatedDate(data.daily[3].dt * 1000)}
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[4])}
        >
          {' '}
          {getFormatedDate(data.daily[4].dt * 1000)}
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[5])}
        >
          {' '}
          {getFormatedDate(data.daily[5].dt * 1000)}
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[6])}
        >
          {' '}
          {getFormatedDate(data.daily[6].dt * 1000)}
        </button>
        <button
          className="nav-btn "
          onClick={(e) => handleClick(e, data.daily[7])}
        >
          {' '}
          {getFormatedDate(data.daily[7].dt * 1000)}
        </button>
      </div>
    </>
  );
}
DateNavigation.propTypes = {
  data: PropTypes.object.isRequired,
  setDay: PropTypes.func.isRequired
};
