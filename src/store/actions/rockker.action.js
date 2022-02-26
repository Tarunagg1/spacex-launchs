import axios from 'axios';
import { toast } from 'react-toastify';
import { updateLocalStorageUrl } from '../../common/localstorage';
import { rocketActions } from '../constant';

export const getRockets = async (year, launch, landing) => {
    let URL = `https://api.spaceXdata.com/v3/launches?limit=100`;

    if (year !== 0) {
        URL += `&launch_year=${year}`;
    }
    if (launch !== 0) {
        URL += `&launch_success=${launch === 1 ? false : true}`;
    }
    if (landing !== 0) {
        URL += `&landing_success=${landing === 1 ? false : true}`;
    }
    
    updateLocalStorageUrl(URL);

    console.log(URL);
    return async (dispatch) => {
        dispatch({ type: rocketActions.GET_REQUEST });
        try {
            const { data } = await axios.get(URL);
            dispatch({ type: rocketActions.GET_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: rocketActions.GET_FAILUER, error: error.respnse });
            toast.error("Something went wrong")
        }
    }
}