import rainbowLogo from "../assets/icon/logo-rainbow.png";

import { Form, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import userIcon from '../assets/img/username.png';
import passwordIcon from '../assets/img/password.png';



function Login() {
  const _onFinish = (values) => {
    console.log(values);
  };
  const _handleInput = (e) => {
    console.log(e);
    console.log('in function');
    // if (e.key === 'Enter') {
    //   console.log('You pressed the escape key!')
    // }
  }
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-login">
      <div className="w-1/4 h-3/5 px-12 py-12 ml-56 mt-32 absolute bg-white shadow rounded border-black">
        <Form onFinish={_onFinish} className="h-full flex flex-col justify-between">
          <Form.Item>
            <div className="flex flex-row">
              <img src={rainbowLogo} className="w-12 h-12" />
              <div className="text-liteBlue text-base text-bold ml-2">
                供電線路智慧故障
                <br />
                定位系統
              </div>
            </div>
          </Form.Item>
          <div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "請輸入正確使用者名稱！",
                pattern: new RegExp(
                  /^[0-9a-zA-Z@_\\\\;\:\\/>.<,-]/i
                ),
              },
            ]}
          >
            <div className="flex flex-row items-center border-b-2 border-gray-500">
              {/* <UserOutlined className="mr-3" /> */}
              <img src={userIcon} className="mr-3"/>
              <div className="">|</div>
              <Input
                className="p-12"
                placeholder="請輸入使用者名稱"
                bordered={false}
                size="large"
                // maxLength={20}
                status="error"
                // suffix={
                //   <CheckCircleOutlined className="bg-gradient-to-r from-litePurple to-liteBlue text-transparent bg-clip-text" />
                // }
                onChange={_handleInput()}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "密碼錯誤，請再試一次"}]}
          >
            <div className="flex flex-row items-center border-b-2 border-gray-500">
              {/* <LockFilled className="mr-3" /> */}
              <img src={passwordIcon} className="mr-3"/>
              <div className="">|</div>
              <Input.Password
                className="p-3 bg-gradient-to-r from-litePurple to-liteBlue"
                placeholder="請輸入密碼"
                bordered={false}
                size="large"
                maxLength={20}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                // onkeyup="value=value.replace(/[^\w\.\/]/ig,’’)"
              />
            </div>
          </Form.Item>
          </div>
          <Form.Item>
            <a
              className="w-full h-10 bg-gradient-to-r from-litePurple to-liteBlue hover:from-white hover:to-white text-white hover:text-liteblue border-white border-2 hover:border-liteBlue text-center inline-block align-middle leading-9 rounded"
              href="/"
            >登入
            </a>
          </Form.Item>
        </Form>
      </div>
      {/* <img src={bgMountainImg} className="fixed w-7/12 h-3/12 bottom-0" style={{left:'13.5%'}}/> */}
    </div>
  );
}

export default Login;
