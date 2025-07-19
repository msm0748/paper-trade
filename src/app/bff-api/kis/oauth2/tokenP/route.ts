import { serverApi } from '@/shared/api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await serverApi
    .post('oauth2/tokenP', {
      headers: {
        grant_type: 'client_credentials',
      },
    })
    .json();

  return NextResponse.json(data);
}
