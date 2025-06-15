import fs from 'fs';
import path from 'path';
import { sync } from 'glob';
import matter from 'gray-matter';
import readTime from 'reading-time';
import { complieMdx } from './mdx';
import { PostFrontmatterSchema } from './schema';
import { categoryOverrides } from '@/constants/constants';
import {
  CategoryInfo,
  Post,
  PostFrontmatter,
  PostSummary,
} from '@/types/types';

const CONTENTS_DIR = path.join(process.cwd(), 'src/contents');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
/**
 * @TODO
 * - 모든 게시물의 메타데이터만 가져오게 리팩토링
 * - 게시물 메타데이터에 썸네일 추가
 *
 * @공통
 *  - 파일 경로 가져오기
 *
 * @게시물목록
 *  - 경로 추출 --> 카테고리 or 전체 mdx 파일 데이터 리턴
 *  - 메타데이터 추출 --> 목록을 출력하기 위함, 카테고리를 통해 전체 경로 리턴
 *  - 여러 경로에 대한 메타데이터 추출
 * @게시물상세
 *  - 목록을 보고 상세 페이지 클릭
 *  - 넘어온 카테고리, 슬러그를 통해 상세 게시물 검색
 */

//카테고리 경로인지 게시물 경로인지 확인
export const isCategory = (segments: string[]): boolean => {
  const slug = segments.at(-1)!;
  const categoryPath = segments.slice(0, -1).join('/');
  const fullPath = path.join(CONTENTS_DIR, categoryPath, slug, 'content.mdx');
  return !fs.existsSync(fullPath);
};

export const checkThumbnailUrl = (thumbnailPath: string): boolean => {
  const fullPath = path.join(PUBLIC_DIR, thumbnailPath);
  return fs.existsSync(fullPath);
};

//모든 게시물의 파일 경로 추출(카테고리 존재 시 해당 경로만)
//ex) $HOME/project/blog/src/contents/dev/golang/golang_input/content.mdx
export const getPostPaths = (category: string = '**'): string[] => {
  const filePaths = sync(`${CONTENTS_DIR}/${category}/**/*.mdx`);
  return filePaths.map((filePath) => filePath.split(path.sep).join('/'));
};

export const getCategoryPaths = () => {
  const directoryPaths = sync(`${CONTENTS_DIR}/*`);
  return directoryPaths.map((filePath) => filePath.split(path.sep).join('/'));
};

//게시물 경로 세그먼트 추출
//ex) dev/golang/golang_input
export const getSegments = (filePath: string): string[] => {
  return filePath
    .replace(`${CONTENTS_DIR.split(path.sep).join('/')}/`, '')
    .replace(/\/content\.mdx$/, '')
    .split('/');
};

const getCategoryPath = (filePath: string): string => {
  // const segments = filePath
  //   .split(path.sep)
  //   .join('/')
  //   .replace(`${CONTENTS_DIR.split(path.sep).join('/')}/`, '')
  //   .replace(/\/content\.mdx$/, '')
  //   .split('/');
  // if (segments.length > 1) {
  //   segments.pop();
  // }
  // return segments.join('/');
  return filePath
    .split(path.sep)
    .join('/')
    .replace(`${CONTENTS_DIR.split(path.sep).join('/')}/`, '')
    .split('/')[0];
};

//부가 정보 파싱
const parsePostInfo = (postPath: string) => {
  const segments = getSegments(postPath);
  const slug = segments[segments.length - 1];
  const categoryPath = segments.slice(0, -1).join('/');
  const url = `/posts/${categoryPath}/${slug}`;
  return { slug, url, categoryPath };
};

//frontmatter, content 파싱
const parseContent = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(file);
  const frontmatter: PostFrontmatter = PostFrontmatterSchema.parse(data);

  const thumbnail = checkThumbnailUrl(frontmatter.thumbnail)
    ? frontmatter.thumbnail
    : '';
  frontmatter.thumbnail = thumbnail;

  const readingTime = readTime(content).text;
  return { frontmatter, content, readingTime };
};

const loadPostSummary = (postPath: string): PostSummary => {
  const { frontmatter, readingTime } = parseContent(postPath);
  return {
    ...parsePostInfo(postPath),
    ...frontmatter,
    readingTime,
  };
};

export const getPostSummary = async (
  postPath: string,
): Promise<PostSummary> => {
  try {
    return { ...loadPostSummary(postPath) };
  } catch (err) {
    // TODO 에러 핸들링 리팩토링
    console.log(err);
    throw new Error(`getPostSummary: ${err}`);
  }
};

export const getPostSummaryList = async (category?: string) => {
  const paths = getPostPaths(category);
  if (paths.length < 1) return [];
  const posts: PostSummary[] = await Promise.all(
    paths.map((path) => {
      return getPostSummary(path);
    }),
  );
  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

//게시물 추출 및 컴파일
export const getPost = async (
  slugInput: string,
  category?: string,
): Promise<Post> => {
  //사용할때 경로 스트링으로 넘겨주기 떄문에 카테고리 파라미터 리팩토링
  const location = category
    ? `${CONTENTS_DIR}/${category}/${slugInput}/content.mdx`
    : `${CONTENTS_DIR}/${slugInput}/content.mdx`;

  const { frontmatter, content, readingTime } = parseContent(location);
  const compiled = await complieMdx(content);
  return {
    ...parsePostInfo(location),
    ...frontmatter,
    content: compiled.content,
    readingTime,
  };
};

export const tagFiltering = () => {};

// export const getPaginatedPosts = async({ page, tag, category }) => {
//   const perPage = 10
// }

const getAllCategoryKeys = (): string[] => {
  const directoryPaths = getCategoryPaths().map((directoryPath) => {
    return directoryPath
      .split(path.sep)
      .join('/')
      .replace(`${CONTENTS_DIR.split(path.sep).join('/')}/`, '')
      .split('/')[0];
  });
  return Array.from(new Set(directoryPaths));
};

const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

const fallbackCategory = (key: string): CategoryInfo => ({
  key,
  label: key
    .split('/')
    .map((k) => k.split('-').map(capitalize).join(' '))
    .join(' > '),
});

//Map: runtime, client, filter
//List: UI map() 렌더링
//Record: SSG 함수, required JSON
export const categoryMap = new Map<string, CategoryInfo>(
  getAllCategoryKeys().map((key) => {
    const override = categoryOverrides[key] ?? {};
    return [key, { ...fallbackCategory(key), ...override } as CategoryInfo];
  }),
);
export const categoryList = Array.from(categoryMap.values()).sort();
export const categoryRecord = Object.fromEntries(categoryMap.entries());

export const getCategoryLabel = (key: string): string | undefined => {
  return categoryMap.get(key)?.label;
};
