/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dwiki Arlan",
  title: "Hi all, I'm Arlan",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 with extensive experience in building Web and Mobile applications using JavaScript, TypeScript, React, Node.js, Go, and other modern technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LrW2EgrLBV9avMFOF_Oa-4d025EGO5UZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arrlancore",
  linkedin: "https://www.linkedin.com/in/dwiki-arlan/",
  gmail: "dwikiarlan@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/5637521/arrlancore",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  "title": "What I do",
  "subTitle": "VERSATILE FULL STACK ENGINEER WITH EXPERTISE IN MODERN WEB TECHNOLOGIES",
  "skills": [
    emoji(
      "⚡ Develop and optimize high-performance, scalable frontend and backend solutions for web and mobile applications",
    ),
    emoji(
      "⚡ Implement and enhance React-based applications with a focus on component reusability and maintainability",
    ),
    emoji(
      "⚡ Integrate and optimize cloud services and third-party APIs to improve application functionality and performance"
    )
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      "skillName": "JavaScript",
      "fontAwesomeClassname": "fab fa-js"
    },
    {
      "skillName": "TypeScript",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "React",
      "fontAwesomeClassname": "fab fa-react"
    },
    {
      "skillName": "Node.js",
      "fontAwesomeClassname": "fab fa-node"
    },
    {
      "skillName": "HTML5",
      "fontAwesomeClassname": "fab fa-html5"
    },
    {
      "skillName": "CSS3",
      "fontAwesomeClassname": "fab fa-css3-alt"
    },
    {
      "skillName": "Go",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "Docker",
      "fontAwesomeClassname": "fab fa-docker"
    },
    {
      "skillName": "Git",
      "fontAwesomeClassname": "fab fa-git-alt"
    },
    {
      "skillName": "AWS",
      "fontAwesomeClassname": "fab fa-aws"
    },
    {
      "skillName": "GCP",
      "fontAwesomeClassname": "fab fa-google"
    },
    {
      "skillName": "MongoDB",
      "fontAwesomeClassname": "fas fa-database"
    },
    {
      "skillName": "PostgreSQL",
      "fontAwesomeClassname": "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jakarta Muhammadiyah University",
      logo: require("./assets/images/umj.png"), // You'll need to provide this image
      subHeader: "Bachelor of Informatics Engineering",
      duration: "2016 - 2019",
      desc: "Completed degree in Informatics Engineering, providing a strong foundation in software development and computer science principles.",
      descBullets: [
        // You may want to add specific achievements or relevant coursework here
      ]
    },
    {
      schoolName: "Polytechnic of Andalas University",
      logo: require("./assets/images/unand.png"),
      subHeader: "Computer Engineering",
      duration: "July 2010 - September 2013",
      desc: "Graduated with combined Software Engineering and Networking Computer for final year project.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Cloud Services",
      progressPercentage: "80%"
    },
    {
      Stack: "Mobile App Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Wallex",
      companylogo: require("./assets/images/wlx.jpg"),
      date: "October 2023 – Present",
      desc: "Improved internal banking service performance and security while working on a platform for global payments and foreign currency management.",
      descBullets: [
        "Reduced API response times from 400ms to 100ms using asynchronous functions",
        "Implemented middleware for enhanced account data security",
        "Improved React component API for better reusability"
      ]
    },
    {
      role: "Software Engineer",
      company: "Jatis Mobile",
      companylogo: require("./assets/images/jatism.png"),
      date: "January 2023 – August 2023",
      desc: "Worked on communication & digital distribution solutions for over 500 companies, focusing on mobile app development and team leadership.",
      descBullets: [
        "Reduced QA delivery time by 50% with Firebase app distribution",
        "Led team to improve app quality using clean React practices",
        "Cut feature development time by 30% through code reorganization"
      ]
    },
    {
      role: "Software Engineer Frontend",
      company: "RuangGuru",
      companylogo: require("./assets/images/ruangGuruLogo.jpg"),
      date: "September 2021 – November 2022",
      desc: "Contributed to the development of online learning services for an edtech company with over 15M users.",
      descBullets: [
        "Accelerated delivery by transitioning to cloud deployment with Jenkins",
        "Improved end-to-end testing efficiency by 20% with robot framework",
        "Boosted code maintainability by 50% through refactoring"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "HIGHLIGHTED RECENT WORKS AND SIGNIFICANT CONTRIBUTIONS",
  projects: [
    {
      image: "https://garrulous-gravity-f14.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7846ceb-ebd2-49f0-854e-49f78669f704%2Fberanda_toko_seller.png?table=block&id=ad116be0-3bb6-41e3-ab02-4210b7a11d2a&spaceId=f37778c3-df0d-46de-9853-10792f653ee9&width=2000&userId=&cache=v2",
      projectName: "Jatis Mobile: BerandaToko App",
      projectDesc: "Build seller app, cut delivery time by 50%, and reduced feature development time by 30% through code reorganization.",
      footerLink: [
        {
          name: "Company Website",
          url: "https://www.berandatoko.com/"
        }
      ]
    },
    {
      image: "https://garrulous-gravity-f14.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa92ad5f9-99a1-470e-be85-bcbfc6051d3f%2Flist_course.png?table=block&id=6f791858-bce5-447c-b1b2-aea47965d464&spaceId=f37778c3-df0d-46de-9853-10792f653ee9&width=2000&userId=&cache=v2",
      projectName: "Skill Academy by RuangGuru",
      projectDesc: "Enhance learning skillacademy platform, ransitioned deployment to cloud, enhanced end-to-end testing by 20%, and refactored code base to boost maintainability by 50%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.skillacademy.com/"
        }
      ]
    },
    {
      image: require("./assets/images/kls.png"),
      projectName: "Kirana Lintas Samudra: Freight Forwarding Software",
      projectDesc: "Developed comprehensive freight forwarding software to manage shipments, including bill of lading, invoicing, tracking, delivery monitoring, accounting, journal entries, and general ledger.",
      footerLink: [
        {
          name: "Company Website",
          url: "https://kiranalintassamudra.co.id/"
        }
      ]
    },
    {
      image: require("./assets/images/primaku.png"),
      projectName: "Primaku Website Redesign",
      projectDesc: "Redesigned the website with a new brand theme and improved SEO, resulting in a 70% increase in search engine visibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://primaku.com/"
        }
      ]
    },
    {
      image: "https://garrulous-gravity-f14.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff10b7c2a-4439-4b3b-a31c-b81eea544f98%2Ftatsu_server.png?table=block&id=ef383eb0-b354-47d6-9895-ac0de76f5581&spaceId=f37778c3-df0d-46de-9853-10792f653ee9&width=2000&userId=&cache=v2",
      projectName: "Tatsu: Community Chat Bot",
      projectDesc: "Developed UI, scaled GraphQL API, and implemented canvas-based game engine for a chat bot, enhancing user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tatsu.gg/"
        }
      ]
    },
  ],
  display: true // Set to true to display this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights and experiences from my journey in software development.",
  displayMediumBlogs: "false", // Set to false as we're using hardcoded blog entries
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/temporal-breath-fresh-air-javascript-date-time-world-dwiki-arlan/",
      title: "Temporal: A Breath of Fresh Air in the JavaScript Date/Time World",
      description:
        "Exploring the Temporal API, a modern solution to JavaScript's longstanding date and time handling challenges."
    },
    {
      url: "https://cerita.hashnode.dev/event-loop-pada-javascript",
      title: "Event Loop pada JavaScript",
      description:
        "Memahami konsep Event Loop dalam JavaScript dan perannya dalam mengelola eksekusi kode asynchronous."
    }
  ],
  display: true // Set to true to display this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-0000000000",
  email_address: "dwikiarlan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
