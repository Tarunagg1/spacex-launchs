import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './css/right.module.css';

export default function Rightbox() {
  const { rocketsData } = useSelector(state => state.rocket);

  return (
    <Fragment>
      <div className={styles.main_board}>
        <Card />
        {
          rocketsData && (
            rocketsData.map((ele,ind) => (
              <Card key={ind} data={ele} />
            ))
          )
        }
      </div>
    </Fragment>
  )
}
