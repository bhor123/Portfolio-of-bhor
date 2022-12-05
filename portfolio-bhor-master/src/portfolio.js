const header = {
  // all the properties are optional - can be left empty or deleted
  //homepage: 'https://www.sumritgrover.me/',
  title: "BS",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Bhor Sharma",
  role: "Software Developer",
  description:
    "I enjoy creating applications, dApps, and websites, as well as tinkering with new technologies. Additionally, I've worked with Java and javascript. I am a self-starter with a strong work ethic. You or your organisation can get in touch with me via email if my expertise in programming and technology will be beneficial to you or your business.",
  resume: "",
  social: {
    linkedin: "https://www.linkedin.com/in/bhor-sharma-89520916b/",
    github: "https://github.com/bhor123",
    twitter: "https://twitter.com/sharma_bhor",
    //calendly: "https://calendly.com/sumritgrover/30min",
   // peerlist:"https://peerlist.io/sumrit_grover",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: "Sustain The World",
  //   description:
  //     "Donors may easily connect with non-profit organisations using the app, which streamlines the donation process for both the donors and the organisations collecting the items.",
  //   stack: ["React Native", "Flask", "PyTorch", "MongoDB"],
  //   sourceCode: "https://github.com/smgrv123/SustainTheWorld-1",
  // },
  {
    name: "InterviewMe-Online interview app",
    description:
      "Donors may easily connect with non-profit organisations using the app, which streamlines the donation process for both the donors and the organisations collecting the items.",
    stack: ["React.js", "Express", "javascipt", "MongoDB","Multer"],
    sourceCode: "",
  },
  {
    name: "Yelpcamp",
    description:
      "This website shows different campgrounds that are suitable for camping, and all CRUD operations can be performed on campgrounds"
    stack: ["Node.js", "Express", "javascript", "MongoDB","Passport.js"],
    sourceCode: "https://github.com/bhor123/Yelpcamp3",
  },
  {
    name: "LetsChat",
    description:
      "This is a scalable real-time chatting web app made using Socket.IO library that provides an interface for multiple users chatting at same time"
      
    stack: ["Node.js", "Socket.IO", "javascript", "HTML5","CSS3"],
    sourceCode: "https://github.com/bhor123/Realtime-Chat-App",
  },
  {
    name: "Sentiment analysis Model",
    description:
      "This model can tell you the sentiments of people regarding to any events happening in the world by analyzing tweets related to that event"
    stack: ["Python"."Jupyter Notebook","Numpy","Pandas"],
    sourceCode: "https://github.com/bhor123/twitter-sentiment-analysis",
  },
  
  // {
  //   name: "Phantom NFT Viewer",
  //   description:
  //     "A dApp built on Solana blockchain that allows you to connect your wallet and look at your NFTs 🤭",
  //   stack: ["React", "Solana"],
  //   sourceCode: "https://github.com/smgrv123/Phantom-NFT-Viewer",
  //   livePreview: "http://solvent-website.vercel.app/",
  // },
  // {
  //   name: "Offline-Edu",
  //   description:
  //     "A system that allows a teacher to transmit notes as media files by converting them to text only messages and delivering them by SMS to students, allowing them to get the contents offline.",
  //   stack: ["React Native", "Flask", "PyTorch", "Firebase", "Python"],
  //   sourceCode: "https://github.com/smgrv123/Offline-Edu",
  //   livePreview:
  //     "https://drive.google.com/file/d/1mECRUEC9p2pzdFT_BFiOoZsPkS0QLnkM/view?usp=sharing",
  // },
  // {
  //   name: "NFT minter",
  //   description:
  //     "This dApp uses Candy Minter to mint NFT on the Solana blockchain. ",
  //   stack: ["React", "Solana"],
  //   sourceCode: "https://github.com/smgrv123/Nft-Candy-minter-web",
  //   livePreview: "http://nft-candy-minter-web.vercel.app/",
  // },
  // {
  //   name: "Medic",
  //   description:
  //     "Medic gives patients transparent info about hospital charges, bed availability, oxygen, and ventilators.",
  //   stack: ["React Native", "Ionic", "Python", "Flask", "Firebase"],
  //   sourceCode: "https://github.com/smgrv123/Medic",
  //   livePreview: "https://hopeful-babbage-6d48f7.netlify.app/",
  // },
  // {
  //   name: "The Truth Finder",
  //   description:
  //     "This initiative aims to teach individuals that internet news articles may not be accurate. This simple tool helps users avoid erroneous assumptions.",
  //   stack: ["React Native", "Django"],
  //   sourceCode: "https://github.com/smgrv123/TheTruthFinder-1",
  // },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Java",
  "CPP",
  "React",
  //"React Native",
  "JavaScript",
  "TypeScript",
  "Firebase",
 // "Chakra UI",
  "HTML",
  "GitHub",
  "Git",
  //"Solana",
  "CSS",
  "MongoDB",
  "MySQL",
 // "Solidity",
  //"Python",
  // "Java",
  // "CPP",
];

const contact = {
  email: "bhorsharma560@gmail.com",
};

export { header, about, projects, skills, contact };
