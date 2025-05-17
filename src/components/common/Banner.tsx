import Landing from '../ui/Landing';
import EmailIcon from './icon/EmailIcon';
import GithubIcon from './icon/GithubIcon';
import Button from '../ui/Button';

const Banner = () => {
  return (
    <section className="my-40">
      <h2 className="font-medium">경험하고 탐구한 내용을 기록합니다</h2>
      <Landing className="my-6">
        이규민의 <span className="italic">사나이클럽</span>
      </Landing>
      {/* <div className="py-2 page-heading-semibold gradient-heading-color">
        이규민의 <span className="italic">사나이클럽</span>
      </div> */}
      <div>
        <h3 className="mb-2 text-muted-foreground">
          Blockchain, Backend Engineer
        </h3>
      </div>
      {/* <div className="font-semibold text-muted-foreground common-letter-spacing leading-tight">
        <Link href="/about">...More</Link>
      </div> */}
      <div className="my-6 flex flex-row gap-2">
        <Button>
          <EmailIcon width={28} height={28} href="mailto:legm0310@gmail.com" />
        </Button>
        <Button>
          <GithubIcon
            width={28}
            height={28}
            href="https://github.com/legm0310"
          />
        </Button>
      </div>
    </section>
  );
};

export default Banner;
