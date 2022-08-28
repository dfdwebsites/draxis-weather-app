import axios from 'axios';
import { useEffect, useState } from 'react';
import DateNavigation from './components/DateNavigation';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MessageBox from './components/MessageBox';
import Widget from './components/Widget';
import LineChart from './components/LineChart';
import { getFormatedDate } from './utils';

//depents the sensitivity of the API we can use process.env and make an env Var to get the URL in this case we will hard code the value
const API_URL =
  'https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric';

function App() {
  const [data, setData] = useState(null);
  const [day, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [alldates, setAlldates] = useState([]);
  const [alldeggres, setAllDeggres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: dataFetched } = await axios.get(API_URL);
        setData(dataFetched);
        setDay(dataFetched.current);
        let dates = [];
        let degs = [];
        dataFetched.daily.forEach((date, i) => {
          if (i) {
            dates.push(getFormatedDate(date.dt * 1000));
            degs.push(date.temp.max);
          }
        });
        setAlldates([...dates]);
        setAllDeggres([...degs]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        err.message ? setError(err.message) : setError('Something went wrong');
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <MessageBox
      error={error}
      setData={setData}
      setError={setError}
      setDay={setDay}
      setAlldates={setAlldates}
      setAllDeggres={setAllDeggres}
    />
  ) : (
    <div>
      <header>
        <h1> Weather App Asigment</h1>
      </header>
      <DateNavigation setDay={setDay} data={data} />
      <main>
        <Widget data={day} />
        <LineChart degrees={alldeggres} dates={alldates} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
