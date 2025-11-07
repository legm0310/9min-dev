'use client';

import { useEffect } from 'react';
import { ViewCountType } from '@/types/types';

const ViewAccumulator = ({
  slug,
  viewCountType,
}: {
  slug?: string;
  viewCountType: ViewCountType;
}) => {
  useEffect(() => {
    fetch('/api/viewcount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, viewCountType }),
    });
  }, [slug, viewCountType]);

  return null;
};

export default ViewAccumulator;
