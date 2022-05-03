import {Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/icon/logo-white.png';

function _gotomanage (e){
}
function _logout (e){
}

function Header() {
  return (
    <header className="relative flex items-center justify-between md:px-10 px-8 h-header shadow-header z-50 bg-purple-500 text-white">
        <div className='w-1/3'><img src={logo}></img></div>
        <div className='w-1/3 text-center'>台電回報系統</div>
        <div className="w-1/3 flex items-center justify-end">
          <UserOutlined className='text-xl'/>
          {/* <div className='mx-2'>taiwanpower</div> */}
          {/* <div> | </div> */}
          {/* <Button className='p-2 mx-3' type='primary' onClick={_logout} href="/login">登出</Button> */}
        </div>
    </header>
  );
}

export default Header;