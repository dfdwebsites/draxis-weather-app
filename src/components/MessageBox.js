import React, { useEffect, useState } from 'react';
import sampleData from '../response.json';
import PropTypes from 'prop-types';
import { getFormatedDate } from '../utils';

export default function MessageBox({
  error,
  setData,
  setError,
  setDay,
  setAlldates,
  setAllDeggres
}) {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeout);
  }, [counter]);

  useEffect(() => {
    if (counter <= 0) {
      console.log('runned');
      setData(sampleData);
      setDay(sampleData.current);
      let newda = [];
      let newDeg = [];
      sampleData.daily.forEach((date, i) => {
        if (i) {
          newda.push(
            getFormatedDate((date.dt + sampleData.timezone_offset) * 1000)
          );
          newDeg.push(date.temp.max);
        }
      });
      setAlldates([...newda]);
      setAllDeggres([...newDeg]);
      setError('');
    }
  }, [counter, setAllDeggres, setAlldates, setData, setDay, setError]);
  return (
    <div className="danger">
      {error} <br /> Creating sample data... in: {counter}s
    </div>
  );
}
MessageBox.propTypes = {
  error: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setDay: PropTypes.func.isRequired,
  setAlldates: PropTypes.func.isRequired,
  setAllDeggres: PropTypes.func.isRequired
};
