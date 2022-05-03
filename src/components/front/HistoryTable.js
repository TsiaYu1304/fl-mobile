import { Table } from "antd";

export default function HistoryTable(props){
    const {data} = props
    const columns = [
        {
            title: '欄位',
            dataIndex: 'name',
        },
        {
            title: '新型視窗定位方法',
            dataIndex: 'new',
            onCell:(_, index)=>{
                if(data.new.success){
                    return <span></span>
                }else{
                    if (index === 0) {
                        return { rowSpan: 6 };
                    }else{
                        return { colSpan: 0 };
                    }
                }
                
            }
        },
        {
            title: '疊加法',
            dataIndex: 'si',
            onCell:(_, index)=>{
                if(data.si.success){
                    return <span></span>
                }else{
                    if (index === 0) {
                        return { rowSpan: 6 };
                    }else{
                        return { colSpan: 0 };
                    }
                }
                
            }
        },
        {
            title: '台電定位方法',
            dataIndex: 'tai',
            onCell:(_, index)=>{
                if(data.tai.success){
                    return <span></span>
                }else{
                    if (index === 0) {
                        return { rowSpan: 6 };
                    }else{
                        return { colSpan: 0 };
                    }
                }
                
            }
        },
      ];

    const datasource=[
        {
            key: '1',
            name: '參考變電站',
            new:  data.new.success?data.new.result.ref_sub:'計算錯誤',
            si: data.si.success? data.si.result.ref_sub_si:'計算錯誤',
            tai: data.tai.success? data.tai.result.ref_sub_tai:'計算錯誤',
          },
          {
            key: '2',
            name: '故障致變電站距離',
            new: data.new.success? data.new.result.est_dis: '',
            si: data.si.success? data.si.result.est_dis_si:'',
            tai: data.tai.success? <span>S:{data.tai.result.est_dis_S_tai}, R:{data.tai.result.est_dis_R_tai}<br/>T:{data.tai.result.est_dis_T_tai}</span>:'',
          },
          {
            key:'3',
            name:'故障位置',
            new:data.new.success? `第 ${data.new.result.est_tower_id_from} 與第 ${data.new.result.est_tower_id_to} 電塔之間`:'',
            si: data.si.success? `第 ${data.si.result.est_tower_id_from_si} 與第 ${data.si.result.est_tower_id_to_si} 電塔之間`:'',
            tai: data.tai.success? `第 ${data.tai.result.est_tower_id_from_tai} 與第 ${data.tai.result.est_tower_id_to_tai} 電塔之間`:'',
          },
          {
            key:'4',
            name:'故障座標',
            new:data.new.success? <span>{data.new.result.est_E_long}<br/>{data.new.result.est_N_lat}</span>:'',
            si:data.si.success? <span>{data.si.result.est_E_long_si}<br/>{data.si.result.est_N_lat_si}</span>:'',
            tai:data.tai.success? <span>{data.tai.result.est_E_long_tai}<br/>{data.tai.result.est_N_lat_tai}</span>:'',
          },
          {
            key:'5',
            name:'參考線路總長',
            new: data.new.success? data.new.result.ref_sub_length:'',
            si: data.si.success? data.si.result.ref_sub_length_si:'',
            tai: data.tai.success? data.tai.result.ref_sub_length_tai:'',
          },
          {
            key:'6',
            name:'原始輸入'
          }
    ]

    return(
        <>
            <Table style={{ whiteSpace: 'pre'}} columns={columns} dataSource={datasource} pagination={false}/>
        </>
    )
}