import {
    SET_ALL_EVENT,
    SET_EVENT_DETAIL,
    SET_TOWERPOS_DETAIL,
    SET_HISTORY_CALRESULT_DETAIL
} from '../utils/actionType/frontActionType'

// 所有歷史資料
export const setAllEvents=(data)=>{
    return{
        type:SET_ALL_EVENT,
        payload:{
            all_events:data
        }
    }
}

// 某筆歷史資料計算結果
export const setEvent=(data)=>{
    return{
        type:SET_EVENT_DETAIL,
        payload:{
            event_result:data
        }
    }
}

export const setTowerpos=(data)=>{
    return{
        type:SET_TOWERPOS_DETAIL,
        payload:{
            tower_pos:data
        }
    }
}

export const setCalResultDetail=(data)=>{
    return{
        type:SET_HISTORY_CALRESULT_DETAIL,
        payload:{
            history_cal_result:data
        }
    }
}