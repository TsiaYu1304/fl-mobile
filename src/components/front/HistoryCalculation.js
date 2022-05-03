import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCalResultDetail } from '../../api/frontApi';
import { setCalResultDetail } from '../../actions/frontAction';
import HistoryTable from './HistoryTable';

// style
import { message } from 'antd';

export default function HistoryCalculation(props){
    const dispatch = useDispatch();
    const { event_id } = props;
    const [_calResult,_setCalResult] = useState({});

    async function _getCalResult(id){
        var allData = await getCalResultDetail(id);
        _setCalResult({});
        if(allData){
            dispatch(setCalResultDetail(allData))
            _setCalResult(allData)
            console.log(allData);
        }else{
            message.error("找不到資料")
        }
    }

    useEffect(()=>{
        _getCalResult(event_id)
    },[])
    

    return(
        <>
        {Object.keys(_calResult).length ==0 ?
            <></>
            :<HistoryTable data={_calResult}/>
        }
        </>
        
    )
}