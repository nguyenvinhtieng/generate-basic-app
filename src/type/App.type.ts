export type Database = 'mysql' | 'mongodb';
export type QuestionType = 'input' | 'list';

export interface QuestionCore {
    title: string;
    description?: string;
    key: string;
    type: QuestionType;
    options?: {
        title: string;
        value?: string;
        description?: string;
    }[]
}

export interface QuestionInput extends QuestionCore {
}
export interface QuestionSelect extends QuestionCore {
    options: {
        title: string;
        value?: string;
        description?: string;
    }[]
}
export type QuestionInitApp = {
    title: string;
    description?: string;
    key: string;
    type: QuestionType;
    options?: {
        title: string;
        value?: string;
        description?: string;
    }[]
}

export interface MenuApp {
    title: string;
    value: string;
    description?: string;
    questions?: QuestionInitApp[];
}

export interface ExpressApp {
    isApi?: boolean;
    isTypeScript?: boolean;
    database?: Database | null;
}
