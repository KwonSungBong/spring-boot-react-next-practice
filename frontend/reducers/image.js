import {
    UPLOAD_BEGIN,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
} from '../actions/imageActions';


const INITIAL_STATE = { loading: false };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case UPLOAD_BEGIN:
            return { ...state, loading: true };
        case UPLOAD_SUCCESS:
            return { ...state, loading: false };
        case UPLOAD_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
}
