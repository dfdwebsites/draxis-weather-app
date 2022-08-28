import React from 'react';
import { getDirectionOfWind } from '../utils';
import PropTypes from 'prop-types';

export default function DetailsCard({ icon, data, description, windDeg }) {
  return windDeg ? (
    <div className="details-card flex-center column">
      <i className="compass">
        <span className="north">N</span>
        <span className="east">E</span>
        <span className="south">S</span>
        <span className="west">W</span>
        <svg
          style={{
            transform: `translate(-50%,-50%) rotate(${windDeg - 90}deg )`
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          // fill="currentColor"
          className="arrow"
          viewBox="0 0 16 16"
        >
          {' '}
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />{' '}
        </svg>
      </i>

      <p className="details-card-description">{description}</p>
      <p className="details-card-data">{getDirectionOfWind(windDeg)}</p>
    </div>
  ) : (
    <div className="details-card flex-center column">
      <i className={`fas ${icon}`}></i>
      <p className="details-card-description">{description}</p>
      <p className="details-card-data">{data}</p>
    </div>
  );
}
DetailsCard.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.string,
  description: PropTypes.string,
  windDeg: PropTypes.number
};
