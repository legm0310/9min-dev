import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function GET() {
  const token = cookies().get('accessToken')?.value;
  if (!token) return NextResponse.json({ valid: false });

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!),
    );
    return NextResponse.json({ valid: true, phone: payload.phone });
  } catch {
    return NextResponse.json({ valid: false });
  }
}
