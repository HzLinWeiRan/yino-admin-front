// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    res.status(200).send({
      name: '顾勇',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      userid: '741FB0e2-D4D2-Caf2-ddE5-A8CE9B844AD9',
      email: 'q.oakfqktfe@sfxp.sn',
      signature: '叫办局反学切海专八比指半。',
      title: '圆立我改解治列手却机节量也离。',
      group: '创新科技组',
      tags: [
        { key: 1, label: '海纳百川' },
        { key: 2, label: '海纳百川' },
        { key: 3, label: '海纳百川' },
        { key: 4, label: 'IT 互联网' },
        { key: 5, label: '阳光少年' },
        { key: 6, label: '健身达人' },
        { key: 7, label: '' },
      ],
      notifyCount: 74,
      unreadCount: 99,
      country: '土耳其',
      access: '才科表知级在或领点各社造象关。',
      geographic: { province: { label: '辽宁省', key: 8 }, city: { label: '巴中市', key: 9 } },
      address: '台湾 台中市 大肚区',
      phone: '11448656134',
    });
  },
};
