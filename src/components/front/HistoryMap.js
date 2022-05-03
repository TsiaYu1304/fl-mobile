import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";

// api
import { getTowerpos } from "../../api/frontApi";
import { setTowerpos } from "../../actions/frontAction";
import { message } from "antd";
import { Item } from "antd/node_modules/rc-menu";

export default function HistoryMap(props) {
  const dispatch = useDispatch();
  const [_towerpos, _setTowerpos] = useState([])
  // 測試位置
  const { line_id } = props;

  async function _getTowerpos(line_id){
      const data = []
      const allData = await getTowerpos(line_id);
      if(allData){
          dispatch(setTowerpos(allData))
          for(let i=0;i< allData.length;i++){
            data.push(allData[i])
          }
          _setTowerpos(data)
      }else{
          message.error('找不到資料')
      }
  }

  useEffect(()=>{
    _getTowerpos(line_id)
  },[])

  return (
    <>
    {_towerpos[0]?
    (
        <MapContainer
      className="w-96 h-96"
      center={_towerpos[0]?[_towerpos[0].N_lat, _towerpos[0].E_long]:[25, 128]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        className="z-0"
      />
      {
          _towerpos.map((item, index)=>{
            return(
                <Marker position={[item.N_lat,item.E_long]} key={index}>
                    <Popup>
                    座標編號:{item.tpos_id}<br/>
                    鐵塔編號：{item.tower_id}<br/>
                    線段編號：{item.linfo_id}<br/>
                    {item.CDatm}<br/>
                    </Popup>
                </Marker>
            )
          })
      }
    </MapContainer>
  ):(<></>)
    }
    </>
  );
}
