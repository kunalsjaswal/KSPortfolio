import hashedInLogo from "../assets/hashedinLogo.png";
import awakenedDesktop from '../assets/project-awakened-desktop.png';
import awakenedTablet from  '../assets/project-awakened-tablet.png';
import builderDesktop from '../assets/project-builder-hut-desktop.png';
import builderTablet from '../assets/project-builder-hut-tablet.png';
import supscriptionDesktop from '../assets/project-supscription-desktop.png';
import supscriptionTablet from '../assets/project-supscription-tablet.png';
import skyViewDesktop from '../assets/project-flight-desktop.png';
import skyViewTable from '../assets/project-flight-tablet.png';

export const experience_details = {
  title: "WORK EXPERIENCE",
  experience_data: [
      {
        position: "Engineer Trainee",
        startDate: "Apr 2024",
        endDate: "June 2024",
        isCurrent: false,
        logo: hashedInLogo,
      },
      {
        position: "Software Developer",
        startDate: "July 2024",
        endDate: "-",
        isCurrent: true,
        logo: hashedInLogo,
      },
    ]
}

export const skill_details = {
  title: "SKILLS",
  skill_data: [
    {
      name: "CLOUD SERVICES",
      dispay_name: "CLOUD \nSERVICES",
      description: "Experienced working with AWS and Azure services including Azure App service, Service bus, container, key vault, AWS ec2, lambda, bucket, others.\n\nCreated client projects and integration with Azure.",
      isActive: true,
      tags: ["AWS", "AZURE"]
    },
    {
      name: "BACK-END",
      dispay_name: "BACK-END",
      description: "Worked with different back-end technologies including node.js, .next core, spring boot, and other.\n\nHave an expertise in MVC model and both monolithic and micro service architecture.",
      isActive: false,
      tags: ["NODE", ".NET", "SPRING BOOT", "FAST API", "PHP"]
    },
    {
      name: "FRONT-END",
      dispay_name: "FRONT-END",
      description: "Created multiple projects using React and Material UI with Redux and context as state management libraries.\n\nWorked with client project using Angular and Angular material UI.\n\nHave good knowledge of custom css with animations and media queries and other css classes including  MUI, Tailwind, Bootstrap others.",
      isActive: false,
      tags: ["REACT", "ANGULAR", "TAILWIND", "JAVASCRIPT", "MUI"]
    },
    {
      name: "GENERATIVE AI",
      dispay_name: "GEN AI",
      description: "Created projects using fast api as server and langChain framework using vector embedding and PostgreSQL as database.\n\nUsed different models including llama-3.3-70b, gpt-3, gpt-4o, other.Also worked with creating different Agents.\nCreated 'text-to-UI' project which converts text into React UI at real time.",
      isActive: false,
      tags: ["LLM", "GROQ", "LANGCHAIN", "VECTOR EMBEDDING", "PROMPT"]
    },
    {
      name: "UI UX",
      dispay_name: "UI UX",
      description: "Have good knowledge of creating user-friendly and interactive user interface. Adding responsiveness to make application work with all devices including desktop, mobile and tablets.\n\nCreating UI mocks on Figma or adobe XD using photoshop to work with images and custom icons.",
      isActive: false,
      tags: ["FIGMA", "ADOBE PHOTOSHOP", "ADOBE XD", "RESPONSIVE"]
    },
    {
      name: "DB & LANGUAGES",
      dispay_name: "DB & \nLANGUAGES",
      description: "Worked with different databases for applications including MySQL, PostgreSQL, MongoDB. Also worked with ORM and Entity management.\n\nKnow about database design with different Integrity constraints and stored procedures.\n\nHave good knowledge of cpp and java language and done competitive programming.",
      isActive: false,
      tags: ["MYSQL", "POSTGRESQL", "MONGO DB", "C / C++", "JAVA"]
    }
    
  ]
};

export const project_details = {
  title: "PROJECT",
  project_data: [
    {
      name: "BUILDER's HUT",
      metalink: "https://abhishek300830.github.io/BuildersHut-MERN-Stack-Application/",
      thumbnail: {
        desktop: builderDesktop,
        tablet: builderTablet
      }
    },
    {
      name: "SKY View",
      metalink: "https://tangerine-bombolone-0a8f80.netlify.app/",
      thumbnail: {
        desktop: skyViewDesktop,
        tablet: skyViewTable
      }
    },
    {
      name: "Subscription app",
      metalink: "https://64d53fd872d8f804efdf7683--harmonious-puffpuff-1b6c0e.netlify.app/",
      thumbnail: {
        desktop: supscriptionDesktop,
        tablet: supscriptionTablet
      }
    },
    {
      name: "Awakened BOT",
      metalink: "https://64ac181d65389d0359d04cee--funny-flan-22c26e.netlify.app/",
      thumbnail: {
        desktop: awakenedDesktop,
        tablet: awakenedTablet
      }
    }
  ]
}