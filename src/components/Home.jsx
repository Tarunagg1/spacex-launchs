import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import styles from './css/home.module.css';
import Leftbox from './Leftbox';
import Rightbox from './Rightbox';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../store/actions/rockker.action';
import Loader from '../components/Loader';
import { getLocalStorage, updateLocalStorage } from '../common/localstorage';

export default function Home() {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.rocket);

  const [year, setYear] = useState(0);
  const [launch, setlaunch] = useState(0);
  const [landing, setlanding] = useState(0);


  useEffect(() => {
    updateLocalStorage(JSON.stringify([year, launch, landing]));
    (async () => {
      dispatch(await getRockets(year, launch, landing));
    })()
    // eslint-disable-next-line
  }, [year, launch, landing]);

  useEffect(() => {
    let arr = JSON.parse(getLocalStorage());
    
    if (arr.length === 0) {
      updateLocalStorage(JSON.stringify([0, 0, 0]));
    } else {
      setYear(arr[0]);
      setlaunch(arr[1]);
      setlanding(arr[2]);
    }
    
    // eslint-disable-next-line 
  }, []);


  return (
    <Fragment>
      <Header />
      <div className={styles.main__content}>
        <div className={styles.container}>
          <div className={styles.left__box}>
            <Leftbox yearData={year} launch={launch} landing={landing} setYear={setYear} setlaunch={setlaunch} setlanding={setlanding} />
          </div>
          <div className={styles.right__box}>
            {
              loading ? <Loader /> : <Rightbox />
            }
          </div>
        </div>
        <h1 style={{ textAlign: 'center' }}>Developed by : Tarun Aggarwal</h1>
      </div>
    </Fragment>
  )
}
