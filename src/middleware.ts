// middleware.ts (서버 전용, 클라이언트에 안 노출됨)
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const protectedPaths = ['/lock'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/?denied=unauthorized', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    const whitelist = process.env.FRIEND_EMAILS?.split(',') ?? [];
    if (
      !payload ||
      typeof payload.phoneNumber !== 'string' ||
      !whitelist.includes(payload.phoneNumber)
    ) {
      return NextResponse.redirect(new URL('/?denied=forbidden', req.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/?denied=unauthorized', req.url));
  }
}

export const config = {
  matcher: ['/lock'],
};
