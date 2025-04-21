import fs from 'fs';
import path from 'path';
import { sync } from 'glob';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import MdxComponents from '@/components/mdx/MdxComponents';

const CONTENTS_DIR = path.join(process.cwd(), 'src/contents');

type PostMeta = {
  title: string;
  slug: string;
  date: Date;
  category: string;
  tags: string[];
};

type Matter = {
  title: string;
  date: Date;
  category: string;
  tags: string[];
};

const parseSlug = (filePath: string): string => {
  return filePath
    .replace(`${CONTENTS_DIR}/`, '')
    .replace(/\/content\.mdx$/, '');
};

//mdx의 부가적인 정보 파싱
const parseAdditionalInfo = (postPath: string) => {
  const slug = parseSlug(postPath);
  return { slug };
};

//mdx의 frontmatter, content 파싱
const parseDetail = (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(file);
  return { data, content };
};

//모든 게시물의 경로 추출(카테고리 존재 시 해당 경로만)
export const getPostPaths = (category: string = '**'): string[] => {
  const file = sync(`${CONTENTS_DIR}/${category}/**/*.mdx`);
  return file;
};

//게시물 matter만 추출
export const getPostMeta = async (postPath: string): Promise<PostMeta> => {
  try {
    const { slug } = parseAdditionalInfo(postPath);
    const { data } = parseDetail(postPath);
    return {
      slug,
      ...(data as Matter),
    };
  } catch (err) {
    // 에러 던질방법 찾기
    throw new Error(`getPost: ${err}`);
  }
};

//게시물 추출 및 컴파일
export const getPost = async (slug: string, category?: string) => {
  const location = category
    ? `${CONTENTS_DIR}/${category}/${slug}/content.mdx`
    : `${CONTENTS_DIR}/${slug}/content.mdx`;

  // const additionalDate = parseAdditionalInfo()
  const { data, content } = parseDetail(location);
  const compiled = await compileMDX({
    source: content,
    components: MdxComponents,
  });
  return {
    slug,
    meta: data as Matter,
    content: compiled.content,
  };
};

//모든 게시물의 슬러그 추출(카테고리 존재 시 해당 슬러그만)
export const getPostSlugs = (category?: string): string[] => {
  const filePaths = getPostPaths(category);
  return filePaths.map((filePath) => parseSlug(filePath));
};

/**
 * @TODO
 * - 모든 게시물의 메타데이터만 가져오게 리팩토링
 * - 게시물 메타데이터에 썸네일 추가
 */
export const getPostListMeta = async (category?: string) => {
  const paths = getPostPaths(category);
  //해당 게시물 목록이 1개도 없을 때 에러처리
  if (!paths) return null;
  const posts: PostMeta[] = await Promise.all(
    paths.map((path) => getPostMeta(path)),
  );
  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

/**
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
 *
 */
