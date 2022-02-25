import React, { Fragment } from 'react'
import styles from './card.module.css';

export default function Card({data}) {
    return (
        <Fragment>
            <div className={styles.card}>
                <img src={data?.mission_patch_small} className={styles.card__image} alt="img" />
                <div className={styles.card__content}>
                    <h4 className={styles.card__title}>{data?.mission_name} <span>#</span>{data?.flight_number} </h4>
                    <div className="card__missionId"><h4 className="card__infoHeading">Mission Id:</h4>
                        <ul className="mission__list"><li>{data?.mission_id[0] === undefined ? "No data" : data?.mission_id[0]} </li></ul>
                    </div>
                    <div className="card__launchYear">
                        <h4 className="card__infoHeading">Launch Year:<span className="launch_year">{data?.launch_year}</span></h4>
                    </div>
                    <table className="card__successfulLaunch">
                        <tbody><tr style={{ padding: '0px' }}>
                            <td className="card__infoHeading"><h4 className="card__infoTitle">Successful Launch: </h4></td>
                            <td><h4 className="launch_success">{data?.launch_success}</h4></td>
                        </tr></tbody>
                    </table>
                    <table className="card__successfulLaunch">
                        <tbody><tr style={{ padding: '0px' }}>
                            <td className="card__infoHeading">
                                <h4 className="card__infoTitle">Successful Landing: </h4>
                            </td>
                            <td>
                                <h4 className="launch_success"> true</h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}
