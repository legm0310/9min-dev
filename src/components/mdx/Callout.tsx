import clsx from 'clsx';

const Normal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    data-name="Layer 1"
  >
    <path
      fill="currentColor"
      d="m16,15c0-1.654,1.346-3,3-3h4.985c.01-.127.015-.255.015-.384v-6.616c0-2.757-2.243-5-5-5h-10c-2.757,0-5,2.243-5,5v10c0,2.757,2.243,5,5,5h7v-5Zm3-1c-.552,0-1,.448-1,1v4.483c.31-.176.599-.396.858-.655l3.677-3.677c.346-.346.635-.733.862-1.151h-4.397Zm-4,10h-6C4.038,24,0,19.963,0,15v-7c0-.553.448-1,1-1s1,.447,1,1v7c0,3.859,3.14,7,7,7h6c.553,0,1,.447,1,1s-.447,1-1,1Z"
    />
  </svg>
);
const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    data-name="Layer 1"
  >
    <path
      fill="currentColor"
      d="m5.868 15.583a8.938 8.938 0 0 1 -2.793-7.761 9 9 0 1 1 14.857 7.941 5.741 5.741 0 0 0 -1.594 2.237h-3.338v-7.184a3 3 0 0 0 2-2.816 1 1 0 0 0 -2 0 1 1 0 0 1 -2 0 1 1 0 0 0 -2 0 3 3 0 0 0 2 2.816v7.184h-3.437a6.839 6.839 0 0 0 -1.695-2.417zm2.132 4.417v.31a3.694 3.694 0 0 0 3.69 3.69h.62a3.694 3.694 0 0 0 3.69-3.69v-.31z"
    />
  </svg>
);
const Warn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    data-name="Layer 1"
  >
    <path
      fill="currentColor"
      d="M23.08,15.33L15,2.57c-.68-.98-1.81-1.57-3-1.57s-2.32,.58-3.03,1.6L.93,15.31c-1.02,1.46-1.21,3.21-.5,4.56,.7,1.35,2.17,2.12,4.01,2.12h15.12c1.85,0,3.31-.77,4.01-2.12,.7-1.35,.51-3.09-.49-4.54ZM11,7c0-.55,.45-1,1-1s1,.45,1,1v6c0,.55-.45,1-1,1s-1-.45-1-1V7Zm1,12c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"
    />
  </svg>
);
const Danger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    data-name="Layer 1"
  >
    <path
      fill="currentColor"
      d="m18.593 7.763c-1.392-1.375-2.593-2.562-2.593-5.763 0-.284-.121-.554-.331-.744-.211-.189-.493-.278-.774-.251-2.385.253-6.895 2.041-6.895 6.995 0 .199.121 3.685-.488 4.315-.088.091-.218.185-.512.185-.182 0-.301-.052-.422-.187-.589-.649-.695-2.56-.583-3.709.025-.257-.05-.503-.195-.697-.062-.083-.138-.158-.227-.22-.352-.246-.817-.239-1.16.008-.146.106-.266.252-.34.429l-.179.431c-.622 1.482-1.395 3.328-1.394 4.945.003 5.948 3.554 9.5 9.5 9.5 6.126 0 9.5-3.196 9.5-9 0-3.367-1.544-4.892-2.907-6.237z"
    />
  </svg>
);

type CalloutType = 'info' | 'warn' | 'danger' | 'normal';

const icons = {
  normal: <Normal />,
  info: <Info />,
  warn: <Warn />,
  danger: <Danger />,
};

const calloutStyle: Record<CalloutType, string> = {
  info: 'bg-info text-info-foreground border-info/30',
  warn: 'bg-warning text-warning-foreground border-warning/30',
  danger: 'bg-destructive text-destructive-foreground border-destructive/30',
  normal:
    'bg-secondary text-secondary-foreground border-secondary-foreground/30',
};

interface CalloutProps extends React.PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

export const Callout = ({ type = 'normal', title, children }: CalloutProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 my-6 px-5 rounded-md ',
        calloutStyle[type],
      )}
    >
      <div className="flex-shrink-0 w-5 h-5">{icons[type]}</div>
      <div className="flex flex-col">
        {title && <span className="font-semibold">{title}</span>}
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  );
};
