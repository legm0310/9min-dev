'use server';

import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { PHONE_WHITELIST } from '@/utils/whitelist';

export const unlockByPhoneNumber = async (phoneNumber: string) => {
  const cookieStore = cookies();
  const existing = cookieStore.get('accessToken')?.value;

  if (existing) {
    return;
  }

  const whitelist = PHONE_WHITELIST;
  const secretKey = process.env.JWT_SECRET;
  if (!whitelist.includes(phoneNumber)) {
    throw new Error('Access denied');
  }

  const token = await new SignJWT({ phoneNumber })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('5h')
    .sign(new TextEncoder().encode(secretKey!));

  cookies().set('accessToken', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60,
  });
  return true;
};
