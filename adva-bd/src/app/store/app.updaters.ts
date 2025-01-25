import { StepTask } from "../models/step-task";

export function currentStepIndex(steps: StepTask[]): number {
    return steps.findIndex(step => step.done === false);
}

export function currentStep(steps: StepTask[]): StepTask {
    return steps[currentStepIndex(steps)];
}

export function toggleStep(steps: StepTask[]): StepTask[] {
    const index = currentStepIndex(steps);
    return steps.map((step, i) => (i === index) 
        ? { ...step, done: true }
        : step);
}
