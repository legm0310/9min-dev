import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { ViewCountType } from '@/types/types';

const redis = Redis.fromEnv();

export async function GET(req: NextRequest) {
  const viewCountTypeParam = req.nextUrl.searchParams.get('viewCountType');
  if (!viewCountTypeParam) {
    return NextResponse.json('viewCountType not found', { status: 400 });
  }
  const viewCountType = viewCountTypeParam as ViewCountType;
  const slugsParam = req.nextUrl.searchParams.get('slugs');

  if (!slugsParam) {
    return NextResponse.json({}, { status: 200 });
  }
  const slugs = slugsParam.split(',');

  const pipeline = redis.pipeline();
  slugs.forEach((slug) => {
    pipeline.zscore(`viewcount:${viewCountType}`, slug);
  });

  const results = await pipeline.exec<number[]>();

  const out: Record<string, number> = {};
  results.forEach((value, index) => {
    out[slugs[index]] = value ?? 0;
  });

  return NextResponse.json(out);
}
