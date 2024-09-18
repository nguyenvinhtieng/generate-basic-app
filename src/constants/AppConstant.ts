import { MenuApp, QuestionType } from "@/type/App.type";

export const QUESTION_TYPE: Record<string, QuestionType> = {
    INPUT: 'input',
    SELECT: 'list'
} as const;

export const MENU_APP: MenuApp[] = [
    { 
        title: 'ExpressJS',
        value: 'express',
        description: 'A web application framework for Node.js',
        questions: [
            {
                title: "Select an language",
                key: "language",
                type: QUESTION_TYPE.SELECT,
                options: [
                    { title: "JavaScript", value: "js" },
                    { title: "TypeScript", value: "ts" }
                ]
            },
            {
                title: "Select Project Type",
                key: "target",
                type: QUESTION_TYPE.SELECT,
                options: [
                    { title: "API", value: "api", description: "Create an API with api prefix" },
                    { title: "Fullstack App", value: "fullstack", description: "Create a fullstack app using handlebars" }
                ]
            },
            {
                title: "Select Database",
                key: "database",
                type: QUESTION_TYPE.SELECT,
                options: [
                    { title: "None", value: undefined },
                    { title: "MySQL", value: "mysql" },
                    { title: "MongoDB", value: "mongodb" }
                ]
            },
            {
                title: "Select Package Manager",
                key: "packageManager",
                type: QUESTION_TYPE.SELECT,
                options: [
                    { title: "npm", value: "npm" },
                    { title: "yarn", value: "yarn" },
                    { title: "bun", value: "bun" }
                ]
            }
        ]
    },
    {
        title: 'ReactJS',
        value: 'react',
        description: 'A JavaScript library for building user interfaces',
    }
];