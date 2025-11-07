import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { ViewCountType } from '@/types/types';

const redis = Redis.fromEnv();

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const slug = body.slug as string | undefined;
  const viewCountType = body.viewCountType as ViewCountType | undefined;

  if (!viewCountType)
    return new NextResponse('viewCountType not found', { status: 400 });

  let isNewBlogVisit;
  let isNewView;

  const ip = req.ip ?? req.headers.get('X-Forwarded-For');
  if (ip) {
    const buf = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(ip),
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    const ex = 3600;

    const dedupVisitorKey = ['deduplicate', hash, 'blog-visitors'].join(':');
    const dedupContentKey = ['deduplicate', hash, viewCountType, slug]
      .filter(Boolean)
      .join(':');

    isNewBlogVisit = await redis.set(dedupVisitorKey, true, {
      nx: true,
      ex,
    });

    isNewView = await redis.set(dedupContentKey, true, {
      nx: true,
      ex,
    });
  }
  let hasCmd = false;
  const visitorKey = 'viewcount:blog-visitors';
  const contentKey = `viewcount:${viewCountType}`;
  const redisPipeline = redis.pipeline();

  if (viewCountType == 'blog-visitors') {
    if (isNewBlogVisit) {
      redisPipeline.incr(visitorKey);
      hasCmd = true;
    }
  } else {
    if (!slug) return new NextResponse('Slug not found', { status: 400 });
    if (isNewBlogVisit) redisPipeline.incr(visitorKey);
    if (isNewView) redisPipeline.zincrby(contentKey, 1, slug);
    if (isNewBlogVisit || isNewView) hasCmd = true;
  }

  if (hasCmd) {
    await redisPipeline.exec();
  }

  return new NextResponse(null, { status: 202 });
}
