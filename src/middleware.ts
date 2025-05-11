// middleware.ts (서버 전용, 클라이언트에 안 노출됨)
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { PHONE_WHITELIST } from './constants/constants';

const protectedPaths = ['/lock', '/posts/admin'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const path = pathname.split('/').slice(1);
  const redirectPath = path.length > 1 ? `${path.slice(0, -1).join('/')}` : '';

  if (!protectedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('accessToken')?.value;
  if (!token) {
    return NextResponse.redirect(
      new URL(`/${redirectPath}?denied=unauthorized`, req.url),
    );
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    if (
      !payload ||
      typeof payload.phoneNumber !== 'string' ||
      !PHONE_WHITELIST.includes(payload.phoneNumber)
    ) {
      return NextResponse.redirect(
        new URL(`/${redirectPath}?denied=forbidden`, req.url),
      );
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL(`/${redirectPath}?denied=unauthorized`, req.url),
    );
  }
}

export const config = {
  matcher: ['/lock/:path*', '/posts/admin/:path*'],
};
