// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          key: 64,
          disabled: false,
          href: 'https://procomponents.ant.design/',
          avatar: '',
          name: '杜明',
          owner: 'Robinson',
          desc: '拉半化做四战自任议行南但斗。',
          callNo: 99,
          status: 69,
          updatedAt: 'IndJtt%',
          createdAt: '7gl',
          progress: 71,
        },
        {
          key: 73,
          disabled: true,
          href: 'https://ant.design',
          avatar: 'https://avatars1.githubusercontent.com/u/8186664?s=40&v=4',
          name: '雷明',
          owner: 'Moore',
          desc: '众适光龙外书候低那增使律现表学义内。',
          callNo: 68,
          status: 69,
          updatedAt: 'RBb',
          createdAt: 'Wwg#HK7',
          progress: 81,
        },
        {
          key: 75,
          disabled: false,
          href: 'https://procomponents.ant.design/',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          name: '孟军',
          owner: 'Robinson',
          desc: '光资心儿去劳复油治我如又受。',
          callNo: 67,
          status: 66,
          updatedAt: '&nlQT#D',
          createdAt: 'zFgF4',
          progress: 98,
        },
        {
          key: 90,
          disabled: true,
          href: 'https://umijs.org/',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
          name: '白平',
          owner: 'Harris',
          desc: '广世写期米明图都都白干部可。',
          callNo: 61,
          status: 76,
          updatedAt: 'JP2]n',
          createdAt: 'oROaPW',
          progress: 78,
        },
        {
          key: 92,
          disabled: true,
          href: 'https://ant.design',
          avatar: 'https://avatars1.githubusercontent.com/u/8186664?s=40&v=4',
          name: '常磊',
          owner: 'Thompson',
          desc: '接感话转了被由土你单量处及计。',
          callNo: 97,
          status: 90,
          updatedAt: 'VLBM',
          createdAt: 'WF@1VHX',
          progress: 73,
        },
      ],
      total: 92,
      success: true,
    });
  },
};
