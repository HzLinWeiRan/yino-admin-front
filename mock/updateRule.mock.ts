// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 86,
      disabled: true,
      href: 'https://github.com/umijs/dumi',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      name: '邵杰',
      owner: 'Taylor',
      desc: '观南术很县表分构亲管小快容东。',
      callNo: 69,
      status: 92,
      updatedAt: 'yi#VG4',
      createdAt: 'MjGj0$',
      progress: 89,
    });
  },
};
