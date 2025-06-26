type ResumeBulletsProps = {
  label: string;
  logoSrc: string;
};

type ProgrammingSkillsDetailsProps = {
  skill: string;
  ratingPercentage: number;
};

type WorkExperienceDetailsProps = {
  title: string;
  company: string;
  duration: {
    fromDate: string;
    toDate: string;
  };
  description: string;
  subHeading: string;
};

type EducationDetailsProps = {
  heading: string;
  subHeading: string;
  university: string;
  fromDate: string;
  toDate: string;
};

type InterestDetailsProps = {
  title: string;
  description: string;
};

export const resumeBullets: ResumeBulletsProps[] = [
  {
    label: "Education",
    logoSrc: "education.svg",
  },
  {
    label: "Programming Skills",
    logoSrc: "programming-skills.svg",
  },
  {
    label: "Work History",
    logoSrc: "work-history.svg",
  },
  {
    label: "Interests",
    logoSrc: "interests.svg",
  },
];

export const programmingSkillsDetails: ProgrammingSkillsDetailsProps[] = [
  {
    skill: "React",
    ratingPercentage: 90,
  },
  {
    skill: "Next.js",
    ratingPercentage: 90,
  },
  {
    skill: "JavaScript",
    ratingPercentage: 90,
  },
  {
    skill: "HTML5",
    ratingPercentage: 90,
  },
  {
    skill: "CSS/SCSS",
    ratingPercentage: 85,
  },
  {
    skill: "Jest",
    ratingPercentage: 90,
  },
  {
    skill: "NodeJs",
    ratingPercentage: 80,
  },
  {
    skill: "GraphQL/Restful API",
    ratingPercentage: 80,
  },
  {
    skill: "Sanity CMS",
    ratingPercentage: 80,
  },
  {
    skill: "TypeScript",
    ratingPercentage: 90,
  },
];

export const workExperienceDetails: WorkExperienceDetailsProps[] = [
  {
    title: "Senior Front End Developer",
    company: "Bell Media.(Canada)",
    duration: {
      fromDate: "June 2024",
      toDate: "Current",
    },
    description:
      "Application for subscription-based video on demand service owned by Bell Media",
    subHeading:
      "Technologies used: Next.js, GraphQL, Apollo Client, HTML5, Tailwind CSS, Sanity CMS, JSON, Yarn, Jasper Player, Norigin Spatial Navigation, React Aria, New Relic, mParticle, Turborepo, Jest, RSBuild",
  },
  {
    title: "Senior Front End Developer",
    company: "Bell.(Canada)",
    duration: {
      fromDate: "April 2023",
      toDate: "June 2024",
    },
    description:
      "Application for profile access, service checks, product browsing, omni orders, wireless setup, quotes, and appointments — all in one place.",
    subHeading:
      "Technologies used: React 18, Jest, NodeJs, GraphQL, Redux, Playwright, HTML5, Material-UI, RESTful API, JSON, SCSS, GULP, Webpack, Babel, NPM",
  },
  {
    title: "Front End Developer",
    company: "Deloitte.(Canada)",
    duration: {
      fromDate: "May 2021",
      toDate: "April 2023",
    },
    description:
      "Portal allows end user to buy, renew and claim insurance policy.",
    subHeading:
      "Technologies used: React 17, Akita(State management), NodeJs, MongoDB, Jest, Playwright, HTML5, Material-UI, RESTful API, JSON, GULP, Webpack, Babel, NPM",
  },
  {
    title: "Front End Developer",
    company: "TM7 Technology.(Canada)s",
    duration: {
      fromDate: "August 2019",
      toDate: "May 2021",
    },
    description:
      "Developed on-demand compliance software platforms to streamline regulatory reporting and oversight.",
    subHeading:
      "Technologies used: React, Redux, TypeScript, Jasmine, Protractor, HTML5, JSS, Material- UI, RESTful API, JSON, GULP, Webpack, Babel, NPM",
  },
  {
    title: "Front End Developer",
    company: "TM7 Technology.(Canada)s",
    duration: {
      fromDate: "August 2019",
      toDate: "May 2021",
    },
    description:
      "Makes it easy for people to virtually line up at their favorite stores and keep out of physical lines where possible.",
    subHeading: "Technologies used: Flutter, Dart",
  },
  {
    title: "Senior Software Developer",
    company: "Fiserv Inc.(India)",
    duration: {
      fromDate: "February 2016",
      toDate: "May 2019",
    },
    description:
      "Allows bankers to view and modify customer and account information.",
    subHeading:
      "Technologies used: React, Redux, TypeScript, Jasmine, Protractor, HTML5, SCSS, KendoUI, XML, RESTful API, JSON, GULP, Webpack, Babel, NPM",
  },
  {
    title: "Web Developer",
    company: "Synechron Technologies.(India)",
    duration: {
      fromDate: "February 2014",
      toDate: "January 2016",
    },
    description:
      "This project targeted to provide game design technique to retirement content material.",
    subHeading:
      "Technologies used: React, Jasmine, HTML5, CSS, JSON, GULP, Webpack, Babel, NPM, JQuery, HTML5, CSS3, Material-UI, Bootstrap, RESTful API",
  },
];

export const educationDetails: EducationDetailsProps[] = [
  {
    heading: "Bachelor of Technology: Computer Engineering.",
    subHeading: "Equivalency in Canada: Bachelor's degree (4 years)",
    university: "Bharati Vidyapeeth Deemed University",
    fromDate: "2006",
    toDate: "2012",
  },
];

export const interestDetails: InterestDetailsProps[] = [
  {
    title: "Traveling",
    description:
      "Enjoy exploring new cultures and environments, which enhances adaptability, curiosity, and global awareness.",
  },
  {
    title: "Photography",
    description:
      "Passionate about capturing moments and perspectives, which sharpens attention to detail and creative thinking.",
  },
  {
    title: "New Technologies",
    description:
      "Keen interest in exploring emerging tech trends and tools, fostering continuous learning and innovation.",
  },
];
