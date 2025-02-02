import { Question } from "./question.model";

export interface StepTaskQuestion extends Question {
    readonly type: 'Question';
}

export interface StepTaskBless {
    readonly type: 'Bless';
    readonly who: 'Kobi' | 'Ronni' | 'Elad' | 'Together';
}

export interface StepTaskImage {
    readonly type: 'Image';
    readonly url: string;
    readonly caption: string;
}

export interface StepTaskGift {
    readonly type: 'Gift';
    readonly text: string[];
}

export interface StepTaskHome {
    readonly type: 'Home';
}

export type StepTask = (StepTaskQuestion | StepTaskBless | StepTaskImage | StepTaskGift | StepTaskHome) & {
    readonly theme: '#a600ff' | '#00b0ff' | '#00ff6a' | '#ff006a' | 'brown' | 'pink' | 'blue' | 'green' | 'orange' | 'purple' | 'cyan';
    readonly done: boolean;
};

export type StepTaskType = StepTask['type'];