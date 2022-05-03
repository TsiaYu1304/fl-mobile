import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEvent,getEvent } from "../../api/frontApi"
import { setAllEvents, setEvent } from "../../actions/frontAction"
// component
import HistoryMap from "./HistoryMap";
import HistoryCalculation from "./HistoryCalculation";
// style
import "./HistoryList.css";
import { Collapse,message,Space} from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


function HistoryList() {
  const dispatch = useDispatch();
  const [_allEvents, _setAllEvents] = useState([]);
  const [_date, _setDate] = useState(`2020-05-01`);
  const [_time, _setTime] = useState(`10:33:30`);


  const _getIndex = (key, event) => {
    event.stopPropagation();
  };

  const _statusSwitch = (status, index) => {
    switch (status) {
      case "已回報":
        return (
          <button
            className="font-bold"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            已回報
          </button>
        );
      case "回報紀錄":
        return (
          <button
            className="font-bold"
            onClick={(event) => {
              console.log(index);
              _getIndex(index, event);}}>
            回報紀錄
          </button>
        );
      default:
        return (
          <div
            className="text-red-500 font-bold"
            onClick={(event) => {event.stopPropagation();}}>
            尚未回報
          </div>
        );
    }
  };

  async function _getAllEvent(){
      const data =[]
      const allData = await getAllEvent();
      if(allData){
        dispatch(setAllEvents(allData))
        for(let i=0;i<allData.length;i++){
            data.push(allData[i]);
        }
        _setAllEvents(data)
        console.log(data)
      }else{
        message.error("找不到資料")
      }
  }


  useEffect(()=>{
      _getAllEvent();
  },[]);

  return (
    <div className="w-1053">
      {_allEvents.map((item, index) => (
        
        <div className="w-full" key={index}>
          {console.log(item)}
          <Collapse className="mx-5" onChange={callback} bordered={true}>
            <Panel
              header={
                <div className="flex">
                  <div className="mr-5 font-bold">{item.faulttime.split('T')[0]}</div>
                  <div className="">{item.line_name}</div>
                </div>
              }
              extra={item.isReported ? _statusSwitch('已回報'):_statusSwitch('尚未回報')}
              key={index}
              showArrow={false}
              className="mb-4 bg-white shadow"
            >
              <div className="z-1 flex justify-between">
                  <HistoryMap line_id={4}/>
                  <div>
                    <div className="flex justify-between mb-6">
                      <div className="flex items-center">
                          <div className="bg-liteBlue  w-2 h-2 rounded-full mr-2.5"></div>
                          <span className="mr-2 font-bold text-base">故障時間</span>
                          <Space size={[8, 16]}>
                            <span className="text-purple-400">民國</span>
                            <span>{item.faulttime.slice(0,-15) - 1911}</span>
                            <span className="text-purple-400">年</span>
                            <span>{item.faulttime.slice(5,-12)}</span>
                            <span className="text-purple-400">月</span>
                            <span>{item.faulttime.slice(8,-9)}</span>
                            <span className="text-purple-400">日</span>
                            <span>{item.faulttime.slice(11,-6)}</span>
                            <span className="text-purple-400">時</span>
                            <span>{item.faulttime.slice(14,-3)}</span>
                            <span className="text-purple-400">分</span>
                          </Space>
                      </div>
                      {
                        item.isCalAllError ?
                        (<button className="btn">推播</button>):(<></>)
                      }
                    </div>
                    <HistoryCalculation event_id={item.event_id}/>
                  </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
