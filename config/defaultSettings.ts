import { ProLayoutProps } from '@ant-design/pro-components';

// {
//   "navTheme": "light",
//   "primaryColor": "#1890ff",
//   "layout": "mix",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": false,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//   "headerHeight": 48
// }
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Panda',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;

// {
//   "navTheme": "light",
//   "colorPrimary": "#1890ff",
//   "layout": "mix",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": true,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//   "token": {}
// }
// {
//   "navTheme": "light",
//   "colorPrimary": "#1890ff",
//   "layout": "mix",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": true,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//   "token": {},
//   "splitMenus": false
// }

// {
//   "navTheme": "light realDark",
//   "colorPrimary": "#1890ff",
//   "layout": "side",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": true,
//   "pwa": true,
//   "logo": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
//   "token": {},
//   "splitMenus": false
// }