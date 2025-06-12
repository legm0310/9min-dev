import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const [mode, ...args] = process.argv.slice(2);

if (!['add', 'remove', 'modify'].includes(mode)) {
  console.error('❌ 작업 모드를 add | remove | modify 중 하나로 지정하세요');
  process.exit(1);
}

type AddOrModifyFields = Record<string, any>;
type RemoveFields = string[];
type UpdateResult = {
  filePath: string;
  modified: boolean;
  success: boolean;
};

function parseValue(val: string): any {
  if (val === '') return '';
  if (val === 'true') return true;
  if (val === 'false') return false;
  if (!isNaN(Number(val))) return Number(val);
  return val;
}

function parseArgs(): AddOrModifyFields | RemoveFields {
  const fields: AddOrModifyFields = {};

  if (mode == 'add' || mode == 'modify') {
    for (const pair of args) {
      const [key, value] = pair.split('=');
      console.log(value);
      if (!key || value === undefined) {
        console.error(`❌ ${mode} 모드는 key=value 형식이 필요합니다`);
        process.exit(1);
      }
      fields[key] = parseValue(value);
    }
    return fields;
  } else {
    return args;
  }
}

function walkMdxFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? walkMdxFiles(path.join(dir, entry.name)) // 하위 디렉토리 재귀 탐색
      : entry.name.endsWith('.mdx')
        ? [path.join(dir, entry.name)]
        : [],
  );
}

function updateMdxFrontmatter(
  filePath: string,
  mode: string,
  args: any,
): UpdateResult {
  let isModify = false;
  const raw = fs.readFileSync(filePath, 'utf8');

  const match = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    console.error(`❌ ${mode} 실패 > 해당 파일이 존재하지 않음 :  ${filePath}`);
    return {
      filePath: filePath,
      modified: false,
      success: false,
    };
  }

  let front = match[1]; // 문자열 그대로
  const content = raw.slice(match[0].length);

  const parsed = yaml.load(front) as Record<string, any>;

  if (mode === 'add') {
    for (const [key, value] of Object.entries(args)) {
      if (!(key in parsed)) {
        const valueStr = yaml.dump({ [key]: value }, { lineWidth: -1 }).trim();
        front += `\n${valueStr}\n`;
        isModify = true;
      } else {
      }
    }
  }

  if (mode === 'modify') {
    for (const [key, value] of Object.entries(args)) {
      const valueStr = yaml.dump({ [key]: value }, { lineWidth: -1 }).trim();
      const pattern = new RegExp(`^${key}:[^\n]*(\n(?:\\s+-[^\n]*\n?)*)?`, 'm');

      if (pattern.test(front)) {
        const before = front.match(pattern)?.[0];
        if (before !== valueStr) {
          front = front.replace(pattern, valueStr);
          isModify = true;
        }
      } else {
        front += `\n${valueStr}`;
        isModify = true;
      }
    }
  }

  if (mode === 'remove') {
    for (const key of args) {
      const pattern = new RegExp(`^${key}:[^\n]*(\n(?:\\s+-[^\n]*\n?)*)?`, 'm');
      front = front.replace(pattern, '').trim();
      isModify = true;
    }
  }

  const output = `---\n${front.trim()}\n---\n${content}`;
  fs.writeFileSync(filePath, output, 'utf8');
  if (isModify) {
    console.log(`✔️  ${mode} 완료: ${filePath}`);
  } else {
    console.log(`✔️  ${mode} 완료 (변경되지 않음): ${filePath}`);
  }
  return {
    filePath,
    modified: isModify,
    success: true,
  };
}

function run() {
  const parsed = parseArgs();
  const contentDir = path.join(process.cwd(), 'src', 'contents');
  const files = walkMdxFiles(contentDir);

  let modifyCount = 0;
  let failedCount = 0;

  for (const file of files) {
    const { filePath, modified, success } = updateMdxFrontmatter(
      file,
      mode,
      parsed,
    );

    if (modified) modifyCount++;
    if (!success) failedCount++;
  }

  console.log(`\n✅ 총 ${files.length}개 파일 처리`);
  console.log(`\n❌ ${failedCount}개 파일 처리 실패`);
  console.log(`\n✅ ${modifyCount}개 파일 변경됨`);
}

run();
