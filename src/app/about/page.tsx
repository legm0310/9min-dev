import Link from 'next/link';
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
        <div className="mb-8 md:mb-10">
          <div className="page-heading-semibold mb-2 text-primary md:mb-4">
            안녕하세요
          </div>
          <div className="flex flex-col gap-2 lg:flex-row md:gap-4 lg:items-end">
            <div className="page-heading-semibold font-semibold">
              깊이 우선 탐구형 개발자
            </div>
            <div className="display-heading font-semibold">이규민입니다.</div>
          </div>
        </div>

        {/* 자기 소개 */}
        <div className="mb-10 w-[90%]">
          <h3 className="text-[15px] leading-5 sm:text-base md:text-lg">
            블록체인, 백엔드 개발에 관심을 갖고 TypeScript, Nest.js, Go를 개발에
            활용하며 공부하고 있습니다. 상황에 맞는 최선의 방법을 찾기 위해
            고민합니다. 디버깅에 어려움을 느끼고 3계층 아키텍처를 도입해
            낭비되는 리소스를 줄인 경험이 있습니다. Port And Adapter 패턴을
            적용해 도메인 별 사용사례를 정리하고, 계층별 추상화를 통해 유지
            보수에 용이한 코드를 작성할 수 있습니다.
          </h3>
          {/* <h3 className="text-base md:text-lg">
            블록체인, 백엔드 개발에 관심을 갖고 TypeScript, Nest.js, Go를 개발에
            활용하며 공부하고 있습니다. 상황에 맞는 최선의 방법을 찾기 위해
            고민합니다.
          </h3> */}
          {/* <h3 className="text-base md:text-lg">
            디버깅에 어려움을 느끼고 3계층 아키텍처를 도입해 낭비되는 리소스를
            줄인 경험이 있습니다.
          </h3>
          <h3 className="text-base md:text-lg">
            Port And Adapter 패턴을 적용해 도메인 별 사용사례를 정리하고, 계층별
            추상화를 통해 유지 보수에 용이한 코드를 작성한 경험이 있습니다.
          </h3> */}
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
        <h1 className="font-semibold">기술 스택</h1>
      </section>

      {/* -------------------------- projects -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">프로젝트</h1>
      </section>

      {/* -------------------------- education -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">교육</h1>
      </section>

      {/* -------------------------- activities -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">활동</h1>
      </section>

      {/* -------------------------- certificate -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">자격증</h1>
      </section>
    </>
  );
};

export default AboutPage;
