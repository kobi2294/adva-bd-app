import { STEPS } from "../data/steps";
import { StepTask } from "../models/step-task";

export interface AppSlice {
    steps: StepTask[];
}

export const initialSlice: AppSlice = {
    steps: STEPS
}