export const projects = [
  // {
  //   title: '',
  //   subTitle: '',
  //   url: '',
  //   role: '',
  //   subInfo: [],
  //   description: '',
  //   contrib: [],
  //   links: [],
  //   skills: [],
  // },
  {
    isAvailable: true,
    title: '9min.dev',
    subTitle: '이규민 개인 블로그',
    url: '/',
    role: '',
    subInfo: ['2025. 04 - 2025. 06', '개인 프로젝트'],
    description: 'Next.js, SSG를 통해 구현한 기술 블로그 + 개인 홈페이지입니다',
    contrib: [
      {
        href: '/posts/development/app-router-layout',
        content: 'App router기반 프로젝트 구조 설계',
      },
      'mdx파일 파싱 기반 포스팅 기능',
      '카테고리 분류 기능 구현',
    ],
    links: [
      {
        href: 'https://github.com/legm0310/9min-dev',
        icon: 'github',
        label: 'Github',
      },
    ],
    skills: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    isAvailable: true,
    title: '블록체인 PoW',
    subTitle: '블록체인 채굴 모듈 클론 코딩',
    url: '',
    role: '',
    subInfo: ['2025. 01 - 2025. 02', '개인 프로젝트'],
    description:
      '블록체인 코어의 동작 과정 및 구현을 직접 경험해보기 위해 강의를 참고하여 블록체인 채굴 모듈을 클론 코딩한 프로젝트입니다',
    contrib: [
      '지갑 생성, 조회 구현',
      '블록, 트랜잭션 생성 로직',
      '코인 전송 기능 구현',
    ],
    links: [
      {
        href: 'https://github.com/legm0310/go-blockchain-mining',
        icon: 'github',
        label: 'Github',
      },
    ],
    skills: ['Golang', 'MongoDB'],
  },
  {
    isAvailable: true,
    title: '그레이더 - Grader',
    subTitle: '가상화폐 자동 매수 시스템',
    url: '',
    role: '',
    subInfo: ['2024. 10 - 진행중', '개인 프로젝트'],
    description:
      '거래소 api를 활용하여 가상화폐 가격을 트래킹한 후, 지표를 생성하고 조건에 맞게 자동으로 매수하는 시스템입니다',
    contrib: [
      '업비트, 빗썸 등 거래소 API를 활용한 실시간 가격 트래킹',
      '가격 데이터를 통한 지표 계산 및 Redis 캐싱',
      '거래소 API를 활용한 매수 기능 구현',
    ],
    links: [
      {
        href: '/',
        icon: 'github',
        label: 'Github(준비중)',
      },
      {
        href: '/',
        icon: 'notion',
        label: '포트폴리오(준비중)',
      },
    ],
    skills: [
      'TypeScript',
      'Nest.js',
      'Golang',
      'Redis-stream',
      'Websocket',
      'Pnpm',
    ],
  },
  {
    isAvailable: true,
    title: '캘로그 - Calog',
    subTitle: '일정 관리 및 공유 서비스',
    url: '',
    role: '백엔드',
    subInfo: ['2024. 03 - 진행중', '3인 팀 프로젝트', 'FE 3, BE 1'],
    description:
      '캘린더에 일정을 생성 및 공유하며 소통할 수 있는 SNS 서비스입니다',
    contrib: [
      '헥사고날 아키텍처 설계 및 초기 설정',
      'CQRS 및 Redis Pub/Sub 비동기 메시지 큐를 사용하여 설계',
      '사용자 로그인, 회원가입(OAuth) API, 구현',
      '일정 관련 CRUD, 일정 초대 기능 구현',
      {
        href: '/posts/development/paging-offset-cursor-artillery-performance',
        content: '사용자 검색 기능 구현 및 페이지네이션 적용',
      },
      {
        href: '/posts/development/nestjs-follow-implements',
        content: '팔로우 기능 구현',
      },
      '알림 기능 구현',
    ],
    links: [
      {
        href: 'https://github.com/calog-project/calog-server',
        icon: 'github',
        label: 'Github',
      },
    ],
    skills: ['TypeScript', 'Nest.js', 'TypeORM', 'MySQL', 'Redis', 'AWS'],
  },
  {
    isAvailable: true,
    title: '판다 - PANDA',
    subTitle: '블록체인 기반 안전거래 플랫폼',
    url: '',
    role: '백엔드, 스마트 컨트랙트 / 팀장',
    subInfo: [
      '2023. 03 - 2023. 11',
      '6인 팀 프로젝트',
      'FE 3, BE 2, BE/SmartContract 1',
    ],
    description:
      '비대면 중고거래 사기에 대응하기 위해, 블록체인과 에스크로 기능를 도입한 안전거래 플랫폼입니다',
    contrib: [
      '전체 아키텍처 설계',
      '사용자 로그인, 회원가입 API 구현',
      '상품 등록, 커스텀 토큰(코인)을 활용한 구매 구현',
      '사용자 1:1 채팅 구현',
    ],
    links: [
      {
        href: 'https://github.com/legm0310/SafeTransactionPlatform',
        icon: 'github',
        label: 'Github',
      },
      {
        href: 'https://zigzag-baroness-c89.notion.site/PANDA-c8cb9074bd304f25932dee898ed8cab2?pvs=74',
        icon: 'notion',
        label: '포트폴리오',
      },
      {
        href: 'https://drive.google.com/file/d/1RKJrMVYvzoMNXx2IelW1HY6YGFmQcEhW/view?usp=drive_link',
        icon: 'thesis',
        label: '논문',
      },
      {
        href: 'https://docs.google.com/presentation/d/1J-6eS4cLjXp9vq37JQvEIUXLhW-xphm9/edit?usp=drive_link&ouid=110260666547458144496&rtpof=true&sd=true',
        icon: 'presentation',
        label: '발표 자료',
      },
    ],
    skills: [
      'JavaScript',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL',
      'Redis',
      'Socket.io',
      'AWS',
      'Solidity',
      'Web3.js',
      'Ethereum',
    ],
  },
  {
    isAvailable: true,
    title: 'JBID',
    subTitle: 'DID 기반 학생증 서비스',
    url: '',
    role: '백엔드, 인프라 구축',
    subInfo: ['2022. 03 - 2022. 07', '2인 팀 프로젝트', 'FE 1, BE 1'],
    description:
      '블록체인 기반 DID 기술을 활용한 학생증 발급 및 신원 인증 서비스 입니다',
    contrib: [
      'Hyperledger Indy-node 블록체인 네트워크 구축',
      'DID 학생증 발급 및 QR코드를 통한 신원 인증 기능 구현',
      '회원가입 및 로그인 구현',
    ],
    links: [
      {
        href: 'https://github.com/legm0310/jbid',
        icon: 'github',
        label: 'Github',
      },
      {
        href: 'https://zigzag-baroness-c89.notion.site/JBID-1d428eb08a6480f9ba3cdc58cf242040?pvs=4',
        icon: 'notion',
        label: '포트폴리오',
      },
      {
        href: 'https://drive.google.com/file/d/1HRwiPFjGkAOA5LNew0J7VF9LqO2pVbhO/view?usp=drive_link',
        icon: 'video',
        label: '시연 영상',
      },
    ],
    skills: [
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS',
      'Docker',
      'Hyperledger-Indy',
    ],
  },
];
