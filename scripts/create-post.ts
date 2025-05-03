import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const [categoryPath, slug] = args;

if (!categoryPath || !slug) {
  console.error('❌ Usage: <category-path> <slug>');
  process.exit(1);
}

const postDir = path.join('src/contents', `/${categoryPath}`, `/${slug}`);
const filePath = path.join(postDir, 'content.mdx');

const frontmatter = `---
title: ''
data: ''
category: '${categoryPath}'
tags: []
thumbnail: ''
---

# ${slug}
`;

fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(filePath, frontmatter);

console.log(`✅ Created: ${filePath}`);
