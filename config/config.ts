import { defineConfig } from '@umijs/max';
import path from 'path';
import routes from './routes'
import defaultSettings from './defaultSettings';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'pandabuy',
    ...defaultSettings
  },
  routes,
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  npmClient: 'npm',
  mock: {},
  
  // proxy: {
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  presets: ['umi-presets-pro'],
  openAPI:  {
    requestLibPath: "import { request } from '@umijs/max'",
    // 或者使用在线的版本
    // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
    schemaPath: path.join(__dirname, 'oneapi.json'),
    mock: true,
  }

});

