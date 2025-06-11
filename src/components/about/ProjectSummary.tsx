import Link from 'next/link';
import GithubIcon from '@/components/common/icon/GithubIcon';
import NotionIcon from '@/components/common/icon/NotionIcon';
import ThesisIcon from '@/components/common/icon/ThesisIcon';
import PresentationIcon from '@/components/common/icon/PresentationIcon';
import VideoIcon from '../common/icon/VideoIcon';
import { projects } from '@/constants/projects';
import clsx from 'clsx';

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
            <div key={p.title} className="flex flex-row gap-10">
              {/* 사이드바 */}
              <aside className="hidden sm:flex flex-col gap-5 min-w-36 md:min-w-48">
                <div className="flex flex-col gap-y-5">
                  <h3 className="font-semibold">{p.title}</h3>
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

                <div className="flex flex-col gap-y-3">
                  <p className="font-semibold">관련 링크 및 자료</p>
                  <div className="flex flex-col gap-y-1.5">
                    {p.links.map(({ href, icon, label }) => (
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
                    ))}
                  </div>
                </div>
              </aside>

              <div className="flex flex-col gap-5">
                <div className="flex flex-row items-center gap-2">
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
                  <p className="text-[15px] leading-5 text-muted-foreground">
                    {p.role}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <p>{p.description}</p>
                  </div>

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
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ProjectSummary;
