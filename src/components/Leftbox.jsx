import React, { Fragment, useEffect, useState } from 'react'
import styles from './css/leftbox.module.css'

export default function Leftbox() {

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
                      <button className={`${styles.year__button} button__active`}>{year}</button>
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
                  <button className={styles.year__button}>True</button>
                </div>
                <div className={styles.box__button}>
                  <button className={styles.year__button}>False</button>
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
                  <button className={styles.year__button}>True</button>
                </div>
                <div className={styles.box__button}>
                  <button className={styles.year__button}>False</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
