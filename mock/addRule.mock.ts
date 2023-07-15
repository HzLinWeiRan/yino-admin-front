// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 87,
      disabled: false,
      href: 'https://umijs.org/',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      name: '傅刚',
      owner: 'Taylor',
      desc: '们亲九作法技世本观例问市京即。',
      callNo: 75,
      status: 71,
      updatedAt: 'ONm[Ht',
      createdAt: 'rmJ#VB',
      progress: 75,
    });
  },
};
