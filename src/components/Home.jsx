import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import styles from './css/home.module.css';
import Leftbox from './Leftbox';
import Rightbox from './Rightbox';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../store/actions/rockker.action';
import Loader from '../components/Loader';

export default function Home() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.rocket);


  useEffect(() => {
    (async () => {
      dispatch(await getRockets());
    })()
  }, [])

  return (
    <Fragment>
      <Header />
      <div className={styles.main__content}>
        <div className={styles.container}>
          <div className={styles.left__box}>
            <Leftbox />
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
