import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from './DetailsCard';
import gsap from 'gsap';

export default function Widget({ data, transition }) {
  let temp, feels_like;
  if (typeof data.temp === 'object') {
    temp = Math.floor((data.temp.day + data.temp.night) / 2);
  } else {
    temp = Math.floor(data.temp);
  }
  if (typeof data.feels_like === 'object') {
    feels_like = Math.floor((data.feels_like.day + data.feels_like.night) / 2);
  } else {
    feels_like = Math.floor(data.feels_like);
  }
  useEffect(() => {
    gsap.fromTo(
      '.sub-title',
      { opacity: 0, scale: 0, duration: 1 },
      { opacity: 1, scale: 1, duration: 1 }
    );
    gsap.fromTo(
      '.main-temp-cointainer',
      { opacity: 0, rotateX: -90, duration: 1 },
      { opacity: 1, rotateX: 0, duration: 2 }
    );
    gsap.fromTo(
      '.details-card-data',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, [data]);

  return (
    <div className="flex column widget-container">
      <div className="title">
        <h2 style={{ textAlign: 'center' }}>Thessaloniki</h2>
        <div className="sub-title">
          {new Date(data.dt * 1000).toDateString()}
        </div>
      </div>
      <div className="main-temp-cointainer">
        <div className="flex">
          <p className="weather-temp">{Math.floor(temp)}°</p>
        </div>
        <div className="flex-aling-center column">
          <img
            src={`./icons/${data.weather[0].icon}.png`}
            alt="weather icon"
            className="weather-icon"
          />
          <p className="weather-main">{data.weather[0].main}</p>
        </div>
      </div>

      <div className="section-title">Details</div>
      <div className="flex detail-cointainer">
        <DetailsCard
          icon={'fa-wind'}
          data={`${data.wind_speed} m/s`}
          description="Wind Speed"
        />
        <DetailsCard
          icon={'fa-wind'}
          data={`${data.wind_speed}m/s`}
          description="Wind direction"
          windDeg={data.wind_deg}
        />

        <DetailsCard
          icon={'fa-thermometer-half'}
          data={`${feels_like} °C`}
          description="Feels like"
        />
        <DetailsCard
          icon={'fa-tint'}
          data={`${data.humidity} %`}
          description="Humidity"
        />
        <DetailsCard
          icon={'fa-tachometer-alt'}
          data={`${data.pressure} hPa`}
          description="Pressure"
        />
        <DetailsCard
          icon={'fa-cloud'}
          data={`${data.clouds} %`}
          description="Clouds"
        />
      </div>
    </div>
  );
}

Widget.propTypes = {
  data: PropTypes.object
};
