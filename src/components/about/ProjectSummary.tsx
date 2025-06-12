import clsx from 'clsx';
import Link from 'next/link';
import ToastButton from '../ui/ToastButton';
import GithubIcon from '@/components/common/icon/GithubIcon';
import NotionIcon from '@/components/common/icon/NotionIcon';
import ThesisIcon from '@/components/common/icon/ThesisIcon';
import PresentationIcon from '@/components/common/icon/PresentationIcon';
import VideoIcon from '../common/icon/VideoIcon';
import { projects } from '@/constants/projects';

const ProjectSummary = () => {
  const iconMap: { [key: string]: (className?: string) => JSX.Element } = {
    github: (className = '') => (
      <GithubIcon className={className} width={16} height={16} />
    ),
    notion: (className = '') => (
      <NotionIcon className={className} width={16} height={16} />
    ),
    thesis: (className = '') => (
      <ThesisIcon className={className} width={16} height={16} />
    ),
    presentation: (className = '') => (
      <PresentationIcon className={className} width={16} height={16} />
    ),
    video: (className = '') => (
      <VideoIcon className={className} width={16} height={16} />
    ),
  };

  return (
    <>
      {projects.map((p) => {
        if (p.isAvailable) {
          return (
            <div key={p.title} className="flex flex-row gap-6 md:gap-16">
              {/* ------------------------사이드바------------------------ */}
              <aside className="hidden sm:flex flex-col gap-5 min-w-36 w-48 flex-shrink-0">
                {/* ------------------------세부 정보------------------------ */}
                <div className="flex flex-col gap-y-5 max-w-48">
                  <h3 className="md:font-semibold">{p.title}</h3>
                  <div className="flex flex-col gap-y-2">
                    {p.subInfo.map((info, idx) => (
                      <p
                        key={idx}
                        className="text-[15px] leading-5 text-muted-foreground"
                      >
                        {info}
                      </p>
                    ))}
                  </div>
                </div>

                {/* ------------------------관련 링크 및 자료------------------------ */}
                <div className="flex flex-col gap-y-3">
                  <p className="font-semibold">관련 링크 및 자료</p>
                  <div className="flex flex-col gap-y-1.5">
                    {p.links.map(({ href, icon, label }) =>
                      href.length !== 0 ? (
                        <Link
                          key={label}
                          href={href}
                          className={clsx(
                            'flex items-center group self-start',
                            'px-1.5 py-0.5 gap-1',
                            'rounded-md border border-border-subtle',
                            'shadow-[3px_3px_2.5px_rgba(0,0,0,0.2)]',
                            'hover:shadow-none hover:border-primary hover:translate-x-[3px] hover:translate-y-[3px]',
                          )}
                        >
                          {iconMap[icon]('group-hover:text-primary')}
                          <span className="underline underline-offset-2 text-secondary-foreground group-hover:text-primary">
                            {label}
                          </span>
                        </Link>
                      ) : (
                        <ToastButton
                          key={label}
                          message="준비 중입니다 🚀"
                          className={clsx(
                            'flex items-center group self-start',
                            'px-1.5 py-0.5 gap-1',
                            'rounded-md border border-border-subtle',
                            'shadow-[3px_3px_2.5px_rgba(0,0,0,0.2)]',
                            'hover:shadow-none hover:border-text-foreground hover:translate-x-[3px] hover:translate-y-[3px]',
                          )}
                        >
                          {iconMap[icon]('group-hover:text-foreground')}
                          <span className="underline underline-offset-2 text-secondary-foreground group-hover:text-foreground">
                            {label}(준비중)
                          </span>
                        </ToastButton>
                      ),
                    )}
                  </div>
                </div>
              </aside>

              {/* ------------------------프로젝트 요약 본문------------------------ */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  {/* ------------------------타이틀------------------------ */}
                  <h3 className="flex sm:hidden font-normal italic text-muted-foreground">
                    {p.title}
                  </h3>
                  <div className="flex flex-col xs:flex-row xs:items-end gap-2">
                    {p.url ? (
                      <Link
                        href={p.url}
                        className="decoration-1 decoration-primary/70 hover:text-primary hover:underline underline-offset-4"
                      >
                        <h3 className="text-lg md:text-xl md:font-semibold">
                          {p.subTitle}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-lg md:text-xl md:font-semibold">
                        {p.subTitle}
                      </h3>
                    )}
                    <p className="text-[15px] leading-6 text-muted-foreground">
                      {p.role}
                    </p>
                  </div>
                </div>

                {/* ------------------------w < sm 세부 정보 표시------------------------  */}
                <div className="flex sm:hidden flex-col gap-2">
                  <div className="flex flex-col gap-y-1">
                    {p.subInfo.map((info, idx) => (
                      <p
                        key={idx}
                        className="text-[15px] leading-5 text-secondary-foreground"
                      >
                        {info}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {/* ------------------------간략한 프로젝트 설명------------------------ */}
                  <div>
                    <p className="text-muted-foreground">{p.description}</p>
                  </div>

                  {/* ------------------------프로젝트 기여 항목------------------------ */}
                  <ul className="pl-5 list-disc space-y-1">
                    {p.contrib.map((c, idx) => (
                      <li key={idx}>
                        {typeof c === 'string' ? (
                          c
                        ) : c.href ? (
                          <Link
                            href={c.href}
                            className="underline underline-offset-2 text-muted-foreground hover:text-primary hover:font-medium"
                          >
                            {c.content}
                          </Link>
                        ) : (
                          c.content
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* ------------------------사용 기술------------------------ */}
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-1 rounded-md text-muted-foreground border border-border-subtle"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ------------------------w < sm 관련 링크 및 자료 표시------------------------ */}
                <div className="flex sm:hidden flex-col gap-2">
                  <p className="font-semibold">관련 링크 및 자료</p>
                  <div className="flex flex-wrap gap-2">
                    {p.links.map(({ href, icon, label }) =>
                      href.length !== 0 ? (
                        <Link
                          key={label}
                          href={href}
                          className={clsx(
                            'flex items-center group self-start',
                            'px-1.5 py-0.5 gap-1',
                            'rounded-md border border-border-subtle',
                            'shadow-[3px_3px_2.5px_rgba(0,0,0,0.2)]',
                            'hover:shadow-none hover:border-primary hover:translate-x-[3px] hover:translate-y-[3px]',
                          )}
                        >
                          {iconMap[icon]('group-hover:text-primary')}
                          <span className="underline underline-offset-2 text-secondary-foreground group-hover:text-primary">
                            {label}
                          </span>
                        </Link>
                      ) : (
                        <ToastButton
                          key={label}
                          message="준비 중입니다 🚀"
                          className={clsx(
                            'flex items-center group self-start',
                            'px-1.5 py-0.5 gap-1',
                            'rounded-md border border-border-subtle',
                            'shadow-[3px_3px_2.5px_rgba(0,0,0,0.2)]',
                            'hover:shadow-none hover:border-text-foreground hover:translate-x-[3px] hover:translate-y-[3px]',
                          )}
                        >
                          {iconMap[icon]('group-hover:text-foreground')}
                          <span className="underline underline-offset-2 text-secondary-foreground group-hover:text-foreground">
                            {label}(준비중)
                          </span>
                        </ToastButton>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ProjectSummary;
