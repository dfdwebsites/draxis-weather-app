import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

export default function LineChart({ dates, degrees }) {
  let options = {
    chart: {
      toolbar: {
        show: false
      },
      id: 'apexchart-degrees',
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 1500,
        animateGradually: {
          enabled: true,
          delay: 550
        }
      }
    },
    stroke: {
      show: true,
      // curve: 'smooth',
      // lineCap: 'butt',
      colors: ['rgb(255, 230, 0)'] //color of line
    },

    // width: 600,
    // height: 200,

    responsive: [
      {
        breakpoint: 700,
        options: {
          // width: 500,
          // height: 170
        }
      }
    ],
    colors: ['#ff0000', '#000000'], //color of bullets
    fill: {
      colors: ['#000000', '#B32824']
    },
    markers: {
      size: 5
      // strokeColors: '#000000'
    },

    xaxis: {
      categories: dates,
      labels: {
        style: {
          colors: [
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff'
          ]
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff'
          ]
        }
      }
    }
  };
  let series = [
    {
      name: ['Degrees'],
      data: degrees
    }
  ];

  return (
    <div className="chart-container">
      <div className="section-title">Max Degrees (next 7 days)</div>
      <Chart
        options={options}
        series={series}
        className="chart"

        // width={500}
        // height={320}
      />
    </div>
  );
}

LineChart.propTypes = {
  degrees: PropTypes.array,
  dates: PropTypes.array
};
