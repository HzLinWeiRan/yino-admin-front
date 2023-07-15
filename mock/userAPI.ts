import { defineMock } from "@umijs/max";
import mockjs from 'mockjs';

const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default defineMock({
  'GET /api/v1/queryUserList': mockjs.mock({
    success: true,
    data: { 'list|100': users },
    errorCode: 0,
  }),
  'GET /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
});
