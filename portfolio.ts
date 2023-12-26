import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mustahid Hasan',
  title: "Hello there! 👋 I'm Mustahid",
  description:
    `"An aspirant Full Stack web developer with a knack for crafting immersive digital experiences. With a diverse background spanning Web Development, Blockchain, and Game Development, I thrive on the fusion of creativity and technology. I love to play video games like valorant, fifa.`,
  personality:'INTJ- T',
  resumeLink:
    'https://drive.google.com/file/d/12qyVMbaQUjCNj1S7QzYue_djamgf8qkp/view?usp=drive_link',
};

export const openSource = {
  githubUserName: 'musta55',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://www.linkedin.com/in/mustahid-hasan-042241225',
  linkedin: 'https://www.linkedin.com/in/mustahid-hasan-042241225',
  github: 'https://github.com/musta55',
  leetcode: 'https://leetcode.com/Mustahid/',
  facebook: 'https://www.facebook.com/mustahidhasan.sakib',
  youtube: 'https://www.youtube.com/channel/UCLfcHcT328NyPEtNhbloDpg',
};

// export const skillsSection: SkillsSectionType = {
//   title: 'What I do',
//   subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
//   data: [
//     {
//       title: 'Full Stack Development',
//       lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
//       skills: [
//         emoji(
//           '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
//         ),
//         emoji('⚡ Building responsive static websites using React.js'),
//         emoji('⚡ Building RESTful APIs in Nodejs & Nodejs REST Framework'),
//       ],
//       softwareSkills: [
//         {
//           skillName: 'HTML-5',
//           fontAwesomeClassName: 'vscode-icons:file-type-html',
//         },
//         {
//           skillName: 'CSS-3',
//           fontAwesomeClassName: 'vscode-icons:file-type-css',
//         },
//         {
//           skillName: 'JavaScript',
//           fontAwesomeClassName: 'logos:javascript',
//         },
//         {
//           skillName: 'Reactjs',
//           fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
//         },

//         {
//           skillName: 'Nodejs',
//           fontAwesomeClassName: 'logos:nodejs',
//         },
//         {
//           skillName: 'NPM',
//           fontAwesomeClassName: 'logos:npm-icon',
//         },
//         {
//           skillName: 'Github',
//           fontAwesomeClassName: 'logos:github',
//         },
//       ],
//     },
//     {
//       title: 'Blockchain Technology',
//       lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
//       skills: [
//         emoji(
//           '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
//         ),
//         emoji(
//           '⚡ Industry experience of building private cloud Blockchain network'
//         ),

//         emoji(
//           '⚡ Building industry standard full stack Dapps with React.js & Solidity using Web3.js, Thirdweb, Hardhat & IPFS'
//         ),
//         emoji(
//           '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Hardhat, Truffle, Thirdweb'
//         ),
//         emoji(
//           '⚡ Experience of using Openzeppelin Smart Contract Standards & IPFS'
//         ),
//       ],
//       softwareSkills: [
//         {
//           skillName: 'Ethereum',
//           fontAwesomeClassName: 'logos:ethereum',
//         },
//         {
//           skillName: 'Solidity',
//           fontAwesomeClassName: 'logos:solidity',
//         },
//         {
//           skillName: 'Web3js',
//           fontAwesomeClassName: 'logos:web3js',
//         },
//         {
//           skillName: 'Metamask',
//           fontAwesomeClassName: 'logos:metamask-icon',
//         },
//         {
//           skillName: 'Ganache',
//           fontAwesomeClassName: 'logos:ganache-icon',
//         },
//         {
//           skillName: 'Hardhat',
//           fontAwesomeClassName: 'logos:hardhat',
//         },
//       ],
//     },
//     {
//       title: 'Game Development, AR Development',
//       lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
//       skills: [
//         emoji('⚡ Experience of working on Augmented reality'),
//         emoji(
//           '⚡ Building AR enabled edtech apps along with gamification technology'
//         ),
//         emoji(
//           '⚡ Constructing different types of AR/VR games in unity'
//         ),
//       ],
//       softwareSkills: [
//         // ? Check README To get icon details
//         {
//           skillName: 'Unity',
//           fontAwesomeClassName: 'logos:unity',
//         },
//         {
//           skillName: 'Vuforia',
//           fontAwesomeClassName: 'logos:head-side-goggles',
//         },
//         // {
//         //   skillName: 'Docker',
//         //   fontAwesomeClassName: 'logos:docker-icon',
//         // },
//         // {
//         //   skillName: 'Nginx',
//         //   fontAwesomeClassName: 'logos:nginx',
//         // }
//       ],
//     },
//   ],
// };

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Blockchain/Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '86',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Dhaka',
    subHeader: 'Bachelor of Science in Software Engineering',
    duration: 'January 2019 - December 2023',
    desc: 'Completed graduation from IIT, DU',
    grade: 'CGPA 3.92',
    descBullets: [
      'Participated in the SCORE ICSE Competition.',
      'Became Champion of the Bangladesh Blockchain Olympiad 2023.',
      'Accepted into the ICT Division Innovation Fund.',
      'Received the Award of Distinction at the International Blockchain Olympiad 2023.'
    ],
  },
  {
    schoolName: 'Notre Dame College',
    subHeader: 'Dhaka Board',
    duration: 'June 2016 - December 2018',
    desc: 'Completed Higher Secondary School Certificate',
    grade: 'GPA: 5.00',
    descBullets: [
      'Secured the General Scholarship from Dhaka Board.',
      'Served as an Executive Member of the Notre Dame English Club.',
      'Actively participating in the Science and English Carnival.'
    ],
  },
  {
    schoolName: 'Chittagong Collegiate School',
    subHeader: 'Bachelor of Science in Software Engineering',
    duration: 'May 2016',
    desc: 'Completed Secondary School Certificate',
    grade: 'GPA 5.00',
    descBullets: [
      'Secured Talentpool Scholarship from Chittagong Board, position 2nd',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'AR Developer and Researcher',
    company: 'Fin2tech Solutions Limited',
    companyLogo: '/img/icons/common/fin2tech.jpg',
    date: 'july 2023 -Now ',
    desc: 'Working as a investigator/research assistant on a startup app named "Chemouflage" which is backed by ICT Division Innovation Fund. Currenty the work is in progress',
  },
  {
    role: 'Web3 Full Stack Developer',
    company: 'Leads Corporation Bangladesh',
    companyLogo: '/img/icons/common/leads.jpg',
    date: 'December 2022 – June 2023',
    desc: "I worked as a Web3 Full Stack Developer trainee, specializing in designing web-based applications and decentralized apps (DApps). My role involved utilizing technologies such as Solidity, Hardhat, Ethereum, Thirdweb, Chart.js, and various other libraries to create innovative and functional solutions for the decentralized web.",
  },
  {
    role: 'API Engineer',
    company: 'Somra MBL Limited',
    companyLogo: '/img/icons/common/somra.png',
    date: 'May 2023 – July 2023',
    desc: 'I worked as API Developer to integrate their project with facebook for sentiment analysis and data analytics, research insights.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    image: '/img/icons/common/ar5.jpg',
    name: 'Chemouflage',
    desc: 'Chemouflage is an Educational Software Based on Bangladeshs secondary level NCTB Chemistry textbook.It helps to learn Chemistry  in an interactive way with Gamification technology and Augmented Reality',
    github: 'https://github.com/TasmiaZerin1128/Chemouflage.git',
    link: 'https://www.youtube.com/watch?v=-kVnST2bqhc',
  },
  {
    image: '/img/icons/common/nfts.jpg',
    name: 'Leads-NFT',
    desc: 'Building an NFT marketplace from scratch like opensea that connect buyers and sellers. In this marketplace, user can mint their own NFT, can see NFT of others. If anyone want to buy nft, they can own nft by paying certain ether with decentralized storage. ',
    github: 'https://github.com/musta55/leadsNFT_nft-marketplace',
    link: 'https://leads-nftmarketplace.netlify.app/',
  },
  {
    image: '/img/icons/common/crowd.png',
    name: 'Decentralized Crowdfunding Dapps',
    desc: 'A crowdfunding application is a platform to create campaign and donate to the campaign which is secured by blockchain technology.',
    github: 'https://github.com/musta55/project_crowdfunding',
    link: 'https://charityfundingdapps.netlify.app/',
  },
  {
    image: '/img/icons/common/clippy.png',
    name: 'Clippy:A Smart PDF Reader',
    desc: 'Smart PDF Reader for better Paper Reading Experience and Knowledge Mining.Clippy comes with two types of summarization: extractive and abstractive . Clippy will highlight the important sentences from the paper if extractive summary is selected.',
    github: 'https://github.com/jaf107/Clippy',
    link: 'https://www.youtube.com/watch?v=gEyYHD3tCuk',
  },
  {
    image: '/img/icons/common/connect4.jpg',
    name: 'Connect 4 AI Apps',
    desc: `A game to connect 4 dots.There is 2 mode ,one is 'two players' another one is 'play with AI'`,
    github: 'https://github.com/musta55/connect4',
    link: ' https://connect4play.netlify.app/',
  },
  {
    image: '/img/icons/common/educhain.png',
    name: 'EduChain',
    desc: 'Blockchain based course provider apps.User can enroll to the courses earn nft and many more.',
    github: 'https://github.com/jsureka/BUET_Hackathon_GGWP',
  },
  {
    image: '/img/icons/common/chemouflage.jpg',
    name: 'Somra Apps',
    desc: 'Research based project enhancing the ability to data analytics',
    link: 'https://somra.netlify.app/',
    github: 'https://github.com/jsureka/somra.git',
  },
  {
    image: '/img/icons/common/khelahobe.png',
    name: 'Khela Hobe',
    desc: 'An web application to showcase popular online tranding games',
    github: 'https://github.com/jaf107/origin-mtm',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'ICT Division Innovation Fund',
    feedback:
      `ICT Division, Governement of the people's republic of Bangladesh | 2023`,
  },
  {
    name: 'Semi Finalist',
    feedback:
      'SCORE | Internation Conference of Software Engineering (ICSE) | 2023',
  },
  {
    name: 'Champion',
    feedback:
      'Bangladesh Blockchain Olympiad | 2023',
  },
  {
    name: 'Champion',
    feedback:
      'Hackathon 2022 -23 | Web3 | Bangladesh University of Engineering Technology(BUET) | Dhaka, Bangladesh',
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mustahid Hasan',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Mustahid',
 // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://musta55.github.io/MustahidHasan',
  keywords: [
    'Mustahid',
    'Mustahid Hasan',
    'Portfolio',
    'Mustahid Portfolio ',
    'Mustahid Hasan Portfolio',
  ],
};
