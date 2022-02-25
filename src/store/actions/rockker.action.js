import axios from 'axios';
import { toast } from 'react-toastify';
import { rocketActions } from '../constant';

export const getRockets = async () => {
    return async (dispatch) => {
        dispatch({ type: rocketActions.GET_REQUEST });
        try {
            const { data } = await axios.get('https://api.spaceXdata.com/v3/launches?limit=100');
            dispatch({ type: rocketActions.GET_SUCCESS,payload: data});
        } catch (error) {
            dispatch({ type: rocketActions.GET_FAILUER,error: error.respnse});
            toast.error("Something went wrong")
        }
    }
}