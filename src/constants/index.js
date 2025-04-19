import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
// export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK = "https://drive.google.com/file/d/130RoHqhWNiQaCMvW23W-rbulM_bmg-12/view?usp=sharing";
export const REPO_LINK = "https://pratik5005/Portfolio";

export const CONTENT = {
    navs: [
        {
            link: "#skills",
            title: "Skills & Experience",
        },
        {
            link: "#experience",
            title: "Experience",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },

        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "PRATIK",
        LastName: "TIWARI",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Design, Code, Create, Connect",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2025",
    },
};

export const ABOUT_ME = {
    name: "Pratik Tiwari",
    tagLine: "Design, Code, Create, Connect",
    intro: CONTENT.hero.hero_content.text
};
