import React, { Fragment, useEffect, useState } from 'react'
import styles from './css/leftbox.module.css'

export default function Leftbox({ yearData, launch, landing, setYear, setlaunch, setlanding }) {
  const [years, setyears] = useState([]);

  useEffect(() => {
    const year = 2006
    const years = Array.from(new Array(16), (val, index) => index + year);
    setyears(years);
  }, [])

  return (
    <Fragment>
      <div className={styles.card__filter}>
        <div className={styles.main}>
          <div className="header">
            <h3 className={styles.action}>Filters</h3>
          </div>
          <div className="filter_years">
            <div className="subpanel">
              <div className="pannelHeader">
                <h3 className={styles.action}>Launch year</h3>
              </div>
              <div className={styles.pannel__years}>
                {
                  years && years.map((year, ind) => (
                    <div className={styles.box__button} key={ind}>
                      <button id={year} onClick={() => setYear((prev) => prev === year ? 0 : year)} className={`${styles.year__button} ${yearData === year ? `${styles.button__active}` : ""}`}>{year}</button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="filter_years">
            <div className="subpanel">
              <div className="pannelHeader">
                <h3 className={styles.action}>Launch year</h3>
              </div>
              <div className={styles.pannel__years}>
                <div className={styles.box__button}>
                  <button onClick={() => setlaunch((prev) => prev === 2 ? 0 : 2)} className={`${styles.year__button} ${launch === 2 ? `${styles.button__active}` : ""}`}>True</button>
                </div>
                <div className={styles.box__button}>
                  <button onClick={() => setlaunch((prev) => prev === 1 ? 0 : 1)} className={`${styles.year__button} ${launch === 1 ? `${styles.button__active}` : ""}`}>False</button>
                </div>
              </div>
            </div>
          </div>


          <div className="filter_years">
            <div className="subpanel">
              <div className="pannelHeader">
                <h3 className={styles.action}>Successful Landing</h3>
              </div>
              <div className={styles.pannel__years}>
                <div className={styles.box__button}>
                  <button onClick={() => setlanding((prev) => prev === 2 ? 0 : 2)} className={`${styles.year__button} ${landing === 2 ? `${styles.button__active}` : ""}`}>True</button>
                </div>
                <div className={styles.box__button}>
                  <button onClick={() => setlanding((prev) => prev === 1 ? 0 : 1)} className={`${styles.year__button} ${landing === 1 ? `${styles.button__active}` : ""}`}>False</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
