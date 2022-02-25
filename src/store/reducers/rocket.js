import { rocketActions } from '../constant';

const initialState = {
    rocketsData: [],
    error: null,
    loading: false
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case rocketActions.GET_REQUEST:
            return { ...state, loading: true }

        case rocketActions.GET_SUCCESS:
            return { ...state, loading: false, rocketsData: payload }

        case rocketActions.ADD_TO_CART_FALIUR:
            return { ...state, error: payload, loading: false }

        default:
            return state;
    }
}