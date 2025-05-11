import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const [categoryPath, slug] = args;

if (!categoryPath || !slug) {
  console.error('❌ Usage: <category-path> <slug>');
  process.exit(1);
}

const imageDirPath = path.join(
  'public/contents/posts',
  `/${categoryPath}`,
  `/${slug}`,
);
const postDir = path.join('src/contents', `/${categoryPath}`, `/${slug}`);
const filePath = path.join(postDir, 'content.mdx');

const ymd = (d: Date) =>
  `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

const frontmatter = `---
title: ''
date: '${ymd(new Date())}'
category: '${categoryPath}'
tags: []
thumbnail: '/contents/posts/${categoryPath}/preview.jpg'
description: ''
---

# ${slug}
`;

fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(filePath, frontmatter);

console.log(`✅ Created: ${filePath}`);

fs.mkdirSync(imageDirPath, { recursive: true });
