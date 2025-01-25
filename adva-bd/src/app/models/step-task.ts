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
}

export interface StepTaskGift {
    readonly type: 'Gift';
    readonly text: string[];
}

export type StepTask = (StepTaskQuestion | StepTaskBless | StepTaskImage | StepTaskGift) & {
    readonly theme: '#a600ff' | '#00b0ff' | '#00ff6a';
    readonly done: boolean;
};

export type StepTaskType = StepTask['type'];