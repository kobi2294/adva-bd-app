import { PartialStateUpdater } from "@ngrx/signals";
import { StepTask } from "../models/step-task";
import { AppSlice } from "./app.slice";

export function currentStepIndex(steps: StepTask[]): number {
    return steps.findIndex(step => step.done === false);
}

export function currentStep(steps: StepTask[]): StepTask {
    return steps[currentStepIndex(steps)];
}

export function toggleStep(): PartialStateUpdater<AppSlice> {

    return state => {
        const index = currentStepIndex(state.steps);
        return {
            steps: state.steps.map((step, i) => (i === index) 
            ? { ...step, done: true }
            : step)
        }    
    }
}
