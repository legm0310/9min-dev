import Link from 'next/link';
// import Image from 'next/image';
import ProjectSummary from '@/components/about/ProjectSummary';
import ResidenceIcon from '@/components/common/icon/ResidenceIcon';
import BlogIcon from '@/components/common/icon/BlogIcon';
import EmailIcon from '@/components/common/icon/EmailIcon';
import GithubIcon from '@/components/common/icon/GithubIcon';

const AboutPage = () => {
  return (
    <>
      {/* -------------------------- introduction -------------------------- */}
      <section className="my-20">
        {/* 페이지 타이틀 */}

        {/* 1안 */}
        <div className="mb-8 md:mb-10 flex flex-col gap-1 sm:gap-2 md:gap-4">
          <div className="page-heading-semibold font-medium">안녕하세요</div>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:flex-row lg:items-end">
            <div className="text-[44px] font-semibold sm:display-heading sm:font-semibold text-foreground">
              {/* <span className="text-[44px] font-semibold sm:display-heading sm:font-semibold text-primary"> */}
              <span className="text-[44px] font-semibold sm:display-heading sm:font-semibold text-foreground underline decoration-primary/75 decoration-[14px] underline-offset-[-4px]">
                깊이 우선 탐구형
              </span>{' '}
              개발자
            </div>

            <div className="page-heading-semibold font-medium">
              이규민입니다.
            </div>
          </div>
        </div>

        {/* 1안 수정 (텍스트 크기 줄임) */}
        {/* <div className="mb-8 md:mb-10">
          <div className="page-heading-semibold mb-2 md:mb-4 font-medium">
            안녕하세요
          </div>
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-row lg:items-end">
            <div className="page-heading-semibold font-medium text-foreground">
              <span className="page-heading-semibold font-semibold text-foreground underline decoration-primary/75 decoration-[14px] underline-offset-[-4px]">
                깊이 우선 탐구형
              </span>{' '}
              개발자
            </div>

            <div className="page-heading-semibold font-medium">
              이규민입니다.
            </div>
          </div>
        </div> */}

        {/* 1안 수정 (이미지 추가) */}

        {/* <div className="mb-8 md:mb-10 flex flex-row gap-10">
          <div className="hidden md:flex relative flex-shrink-0 md:w-40 md:h-44 overflow-hidden rounded-3xl">
            <Image
              src="/images/profile/profile.jpg"
              alt={'profile'}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
          <div>
            <div className="page-heading-semibold mb-2 md:mb-4 font-medium">
              안녕하세요
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="display-heading text-5xl md:text-[52px] font-semibold text-foreground">
                <span className="text-foreground underline decoration-primary/75 decoration-[14px] underline-offset-[-4px]">
                  깊이 우선 탐구형
                </span>{' '}
                개발자
              </div>
              <div className="page-heading-semibold font-medium">
                이규민입니다.
              </div>
            </div>
          </div>
        </div> */}

        {/* 자기 소개 */}
        <div className="mb-10 flex flex-row w-full gap-x-8">
          {/* <div className="hidden md:flex relative flex-shrink-0 md:w-40 md:h-44 overflow-hidden rounded-full">
            <Image
              src="/images/profile/profile.jpg"
              alt={'profile'}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div> */}
          <h3 className="font-normal text-[15px] leading-5 sm:text-base md:text-lg">
            <span className="font-semibold text-primary">블록체인, 백엔드</span>{' '}
            개발에 관심을 갖고{' '}
            <span className="font-medium text-primary">
              TypeScript, Nest.js, Go
            </span>
            를 주로 활용하며 공부하고 있습니다. 상황에 맞는 최선의 방법을 찾기
            위해 고민합니다. 디버깅에 어려움을 느끼고 3계층 아키텍처를 도입해
            낭비되는 리소스를 줄인 경험이 있습니다. Port And Adapter 패턴을
            적용해 도메인 별 사용사례를 정리하고, 계층별 추상화를 통해{' '}
            <span className="font-semibold text-primary">코드 구조화</span> 및{' '}
            <span className="font-semibold text-primary">
              유지 보수에 용이한 코드
            </span>
            를 작성할 수 있습니다.
          </h3>
        </div>

        {/* 인적 사항 */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center gap-1">
              <ResidenceIcon width={16} height={16} />
              <p>Residence</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <EmailIcon width={16} height={16} />
              <p>Email</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <GithubIcon width={16} height={16} />
              <p>Github</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <BlogIcon width={16} height={16} />
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Goyang. Republic of Korea</p>
            <Link
              href={'mailto:legm0310@gmail.com'}
              className="underline-offset-4 decoration-2 decoration-primary hover:underline"
            >
              legm0310@gmail.com
            </Link>
            <Link
              href={'https://github.com/legm0310'}
              className="underline-offset-4 decoration-2 decoration-primary hover:underline"
            >
              github.com/legm0310
            </Link>
            <Link
              href={'https://9min-dev.vercel.app/posts'}
              className="underline-offset-4 decoration-2 decoration-primary hover:underline"
            >
              9min-dev.vercel.app
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------- skills -------------------------- */}
      <section className="mb-20">
        <h1 className="mb-10">기술 스택</h1>
        <ul className="pl-5 list-disc space-y-6">
          <li>
            <div className="flex flex-col space-y-2 items-start">
              <h3 className="">Languages</h3>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="">JavaScript</span>
                <span className="">TypeScript</span>
                <span className="">Go</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col space-y-2">
              <h3 className="">Frameworks/Libraries</h3>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="">Express</span>
                <span className="">Nest.js</span>
                <span className="">TypeORM</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col space-y-2">
              <h3 className="">DevOps/Tools</h3>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="">AWS</span>
                <span className="">MySQL</span>
                <span className="">Redis</span>
                <span className="">Ethereum</span>
                <span className="">Hyperledger-Indy</span>
                <span className="">Git</span>
                <span className="">VSCode</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col space-y-2">
              <h3 className="">Etc. Studying</h3>
              <div className="flex flex-row flex-wrap gap-2">
                <span className="">Solidity</span>
                <span className="">Next.js</span>
                <span className="">React</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* -------------------------- projects -------------------------- */}
      <section className="mb-20">
        <h1 className="mb-10 font-extrabold">프로젝트</h1>
        <div className="flex flex-col gap-20">
          <ProjectSummary />
        </div>
      </section>

      {/* -------------------------- education -------------------------- */}
      <section className="mb-20">
        <h1 className="mb-10 font-extrabold">교육</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col gap-5 min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">
                2018. 03 - 2024. 02
              </h3>
            </aside>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  중부대학교 고양캠퍼스
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2018. 03 - 2024. 02
                </p>
              </div>
              <ul className="pl-5 list-disc space-y-1 text-muted-foreground">
                <li>
                  <h4>정보보호학전공 학사 졸업</h4>
                </li>
                <li>
                  <h4>평점 3.77/4.5</h4>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col gap-5 min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">
                2015. 03 - 2018. 02
              </h3>
            </aside>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  고양일고등학교
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2018. 03 - 2024. 02
                </p>
              </div>
              <ul className="pl-5 list-disc space-y-1">
                <li>
                  <h4 className="text-muted-foreground">인문 자연계열</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------- activities -------------------------- */}
      <section className="mb-20">
        <h1 className="mb-10 font-extrabold">활동</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <p className="text-[15px] leading-5 text-muted-foreground">
                2023. 12
              </p>
              <h3 className="md:font-normal text-muted-foreground">
                한국정보보호학회
              </h3>
            </aside>

            <div className="flex flex-col gap-3">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국정보보호학회
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  한국정보보호학회 동계학술대회 논문 투고
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2023. 12
                </p>
              </div>
              {/* <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국정보보호학회
              </p> */}
              <ul className="pl-5 list-disc space-y-1 text-muted-foreground">
                <li>
                  <h4>
                    블록체인 기반 안전 거래 플랫폼(판다)을 주제로 논문 작성
                  </h4>
                </li>
                <li>
                  <h4>
                    2023년 한국정보보호학회 동계학술대회(CISC-W` 23) 논문 투고
                    및 발표 (논문 번호 131)
                  </h4>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <p className="text-[15px] leading-5 text-muted-foreground">
                2023. 12
              </p>
              <h3 className="md:font-normal text-muted-foreground">
                중부대학교
              </h3>
            </aside>

            <div className="flex flex-col gap-3">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                중부대학교
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  교내 캡스톤디자인 경진대회 참가
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2023. 12
                </p>
              </div>
              {/* <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                중부대학교
              </p> */}
              <ul className="pl-5 list-disc space-y-1 text-muted-foreground">
                <li>
                  <h4>
                    블록체인 기반 안전 거래 플랫폼(판다)을 주제로 캡스톤디자인
                    경진대회 참가
                  </h4>
                </li>
                <li>
                  <h4>52개 팀 중 자연과학 및 공과계열 11팀으로 입선</h4>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <p className="text-[15px] leading-5 text-muted-foreground">
                2022. 11
              </p>
              <h3 className="md:font-normal text-muted-foreground">
                한국정보보호산업협회(KISIA)
              </h3>
            </aside>

            <div className="flex flex-col gap-3">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국정보보호산업협회(KISIA)
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  ICT융합산업보안 인재양성교육 블록체인 분야
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2022. 11
                </p>
              </div>
              {/* <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국정보보호산업협회(KISIA)
              </p> */}
              <ul className="pl-5 list-disc space-y-1 text-muted-foreground">
                <li>
                  <h4>kisia주관 블록체인 분야 인재 양성 교육 수료</h4>
                </li>
                <li>
                  <h4>
                    블록체인 개요와 이론, 이더리움 및 솔리디티를 활용한 스마트
                    컨트랙트 실습
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------- certificate -------------------------- */}
      <section className="mb-20">
        <h1 className="mb-10 font-extrabold">자격증</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">2023. 10</h3>
            </aside>

            <div className="flex flex-col gap-2">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국데이터베이스진흥원
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  SQLD(SQL Developer)
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2022. 11
                </p>
              </div>
              <p className="hidden sm:flex text-[15px] leading-5 italic text-muted-foreground">
                한국데이터베이스진흥원
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">2023. 06</h3>
            </aside>

            <div className="flex flex-col gap-2">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국산업인력공단
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  정보처리기사
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2023. 06
                </p>
              </div>
              <p className="hidden sm:flex text-[15px] leading-5 italic text-muted-foreground">
                한국산업인력공단
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">2021. 11</h3>
            </aside>

            <div className="flex flex-col gap-2">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국정보통신자격협회
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  네트워크관리사 2급
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2021. 11
                </p>
              </div>
              <p className="hidden sm:flex text-[15px] leading-5 italic text-muted-foreground">
                한국정보통신자격협회
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-6 md:gap-16">
            <aside className="hidden sm:flex flex-col min-w-36 w-48 flex-shrink-0">
              <h3 className="md:font-normal text-muted-foreground">2021. 10</h3>
            </aside>

            <div className="flex flex-col gap-2">
              <p className="sm:hidden text-[15px] leading-5 italic text-muted-foreground">
                한국산업보안포럼
              </p>
              <div className="flex flex-row items-end gap-2">
                <h3 className="text-lg md:text-xl md:font-semibold">
                  윈도우포렌식전문가 2급
                </h3>
                <p className="sm:hidden text-[15px] leading-5 text-muted-foreground">
                  2021. 10
                </p>
              </div>
              <p className="hidden sm:flex text-[15px] leading-5 italic text-muted-foreground">
                한국산업보안포럼
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
