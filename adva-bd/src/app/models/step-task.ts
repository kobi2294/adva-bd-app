import { Question } from "./question.model";

export interface StepTaskQuestion extends Question {
    readonly type: 'Question';
    readonly done: boolean;
}

export interface StepTaskBless {
    readonly type: 'Bless';
    readonly who: 'Kobi' | 'Ronni' | 'Elad' | 'Together';
    readonly done: true;
}

export interface StepTaskImage {
    readonly type: 'Image';
    readonly done: true;
    readonly url: string;
}

export interface StepTaskGift {
    readonly type: 'Gift';
    readonly done: true;
    readonly text: string[];
}

export type StepTask = (StepTaskQuestion | StepTaskBless | StepTaskImage | StepTaskGift) & {
    readonly theme: '#a600ff' | '#00b0ff' | '#00ff6a';
};

export type StepTaskType = StepTask['type'];