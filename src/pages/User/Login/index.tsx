import { Space, message } from 'antd'
import styles from '../index.less'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';

const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const waitTime = (time: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(time)
    }, time)
  })
}

interface IUser {
  username: string,
  password: string
}

const Login = () => {

  const handleLogin = async (values: IUser) => {
    console.log(values)
    await waitTime(2000);
    console.log(values);
    message.success('提交成功');
  }

  return <div className={styles.container}>
      <LoginForm
        title="Panda"
        subTitle="全球最大的代码托管平台"
        onFinish={handleLogin}
        actions={
          <Space>
            其他登录方式
            <AlipayCircleOutlined style={iconStyles} />
            <TaobaoCircleOutlined style={iconStyles} />
            <WeiboCircleOutlined style={iconStyles} />
          </Space>
        }
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'请输入用户名'}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder={'请输入密码'}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginForm>
  </div>
}

export default Login