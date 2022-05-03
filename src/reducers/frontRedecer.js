import {
    SET_ALL_EVENT,
    SET_EVENT_DETAIL,
    SET_TOWERPOS_DETAIL,
    SET_HISTORY_CALRESULT_DETAIL
} from '../utils/actionType/frontActionType'

const initialState = {
    all_events:[],
    event_result:{},
    tower_pos:[],
    history_cal_result:{}
};




export const frontReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_EVENT:
            return {
                ...state,
                all_events: action.payload
            }
        case SET_EVENT_DETAIL:
            return{
                ...state,
                event_result:action.payload
            }
        case SET_TOWERPOS_DETAIL:
            return{
                ...state,
                tower_pos:action.payload
            }
        case SET_HISTORY_CALRESULT_DETAIL:
            return{
                ...state,
                history_cal_result:action.payload
            }
        default:
            return state
    }
}

