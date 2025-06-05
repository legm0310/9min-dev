import Link from 'next/link';
import EmailIcon from './icon/EmailIcon';
import GithubIcon from './icon/GithubIcon';
import Button from '../ui/Button';
import Image from 'next/image';
import avatarImage from '/public/images/profile/avatar1.jpg';
import ToastButton from '../ui/ToastButton';

interface ProfileProps {
  className?: string;
}

const Profile = ({ className = '' }: ProfileProps) => {
  return (
    <section
      className={`flex flex-col items-center md:items-start ${className}`}
    >
      {/* -------------------- profile card --------------------*/}
      <div
        className={
          'mb-4 flex flex-col items-center md:flex-row md:gap-x-10 md:items-start'
        }
      >
        {/*-------------------- image wrapper --------------------*/}
        <div className="relative w-44 md:w-36 h-44 md:h-36 flex-shrink-0 mb-8 md:mb-0 overflow-hidden rounded-full md:rounded-lg">
          <Image
            src={avatarImage}
            alt="avatar"
            fill
            sizes=""
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/*-------------- info, position, description, contect icon -------------- */}
        <div className="flex flex-col text-center md:text-start items-center md:items-start">
          <div className="mb-2 flex flex-row gap-2 items-end">
            <h2 className="md:text-lg">Lee Gyumin(9min)</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Blockchain, Backend Engineer
            </p>
          </div>
          <div className="mb-2 w-5/6 md:w-[90%] text-sm md:text-base">
            <p>
              깊이 우선 탐구형 백엔드 엔지니어. 새로운 기술과 문제 해결에 열린
              태도로 접근합니다.
            </p>
            <p>
              구조화 및 관심사 분리, 유지보수와 협업을 위한 코드를 선호합니다.
              TypeScript, Nestjs, Go, 블록체인 등에 흥미를 가지고 탐구합니다.
            </p>
          </div>
          <div className="my-1 flex flex-row gap-1">
            <Button className="p-1">
              <GithubIcon
                width={20}
                height={20}
                href="https://github.com/legm0310"
              />
            </Button>
            <Button className="p-1">
              <EmailIcon
                width={20}
                height={20}
                href="mailto:legm0310@gmail.com"
              />
            </Button>
          </div>
        </div>
      </div>

      {/*------------------- more about me --------------------*/}
      <ToastButton
        message="준비 중입니다 🚀"
        className="self-center md:self-start"
      >
        <span className="p-2 underline text-muted-foreground hover:text-foreground">
          More About me -{'>'}
        </span>
      </ToastButton>
      {/* <Link href={'/about'} className="self-center md:self-start">
        <span className="p-2 underline text-muted-foreground hover:text-foreground">
          More About me -{'>'}
        </span>
      </Link> */}
    </section>
  );
};

export default Profile;
