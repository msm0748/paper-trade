import ky from 'ky';
import { getToken } from '../utils/getToken';

export const clientApi = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  hooks: {
    beforeRequest: [
      async (request) => {
        const { accessToken, refreshToken } = await getToken();
        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
  },
});

export const serverApi = ky.extend({
  prefixUrl: process.env.API_URL!,
  hooks: {
    beforeRequest: [
      (request) => {
        // request.headers.set('content-type', 'application/json; charset=utf-8');
        request.headers.set('appkey', process.env.API_KEY!);
        request.headers.set('appsecret', process.env.API_SECRET!);
      },
    ],
  },
});
