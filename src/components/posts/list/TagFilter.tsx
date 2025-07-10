'use client';

import { useEffect, useState } from 'react';

const TagFilter = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div>
      <h3>Tags</h3>
      <div className="flex flex-col">
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
