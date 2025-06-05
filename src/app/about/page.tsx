import BlogIcon from '@/components/common/icon/BlogIcon';
import EmailIcon from '@/components/common/icon/EmailIcon';
import GithubIcon from '@/components/common/icon/GithubIcon';
import ResidenceIcon from '@/components/common/icon/ResidenceIcon';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      {/* -------------------------- introduction -------------------------- */}
      <section className="my-20">
        {/* 페이지 타이틀 */}
        <div className="mb-10">
          <div className="page-heading-semibold mb-2 text-primary">
            안녕하세요
          </div>
          <div className="flex flex-row gap-4 items-end">
            <div className="page-heading-semibold font-semibold">
              깊이 우선 탐구형 개발자
            </div>
            <div className="display-heading font-semibold">이규민입니다.</div>
          </div>
        </div>

        {/* 자기 소개 */}
        <div className="mb-10 w-[90%]">
          <h3 className="text-base md:text-lg">
            블록체인, 백엔드 개발에 관심을 갖고 공부하고 있습니다. 상황에 맞는
            최선의 방법을 찾기 위해 고민합니다.
          </h3>
          <h3 className="text-base md:text-lg">
            디버깅에 어려움을 느끼고 3계층 아키텍처를 도입해 낭비되는 리소스를
            줄인 경험이 있습니다.
          </h3>
          <h3 className="text-base md:text-lg">
            Nestjs와 Port And Adapter 패턴을 적용해 도메인 별 사용사례를
            정리하고, 계층별 추상화를 통해 유지 보수에 용이한 코드를 작성한
            경험이 있습니다.
          </h3>
        </div>

        {/* 인적 사항 */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center gap-1">
              <ResidenceIcon
                href="mailto:legm0310@gmail.com"
                width={16}
                height={16}
              />
              <p>Residence</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <EmailIcon
                href="mailto:legm0310@gmail.com"
                width={16}
                height={16}
              />
              <p>Email</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <GithubIcon
                href="https://github.com/legm0310"
                width={16}
                height={16}
              />
              <p>Github</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <BlogIcon
                href="https://9min-dev.vercel.app/posts"
                width={16}
                height={16}
              />
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Goyang. Republic of Korea</p>
            <p>legm0310@gmail.com</p>
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
        <h1 className="font-semibold">Projects</h1>
      </section>

      {/* -------------------------- education -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">Education</h1>
      </section>

      {/* -------------------------- certificate -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">Certificate</h1>
      </section>

      {/* -------------------------- activities -------------------------- */}
      <section className="mb-20">
        <h1 className="font-semibold">Activities</h1>
      </section>
    </>
  );
};

export default AboutPage;
