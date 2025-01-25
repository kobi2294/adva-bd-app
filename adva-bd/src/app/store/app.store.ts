import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import { initialSlice } from './app.slice';
import { currentStep, currentStepIndex, toggleStep } from './app.updaters';
import { computed } from '@angular/core';

export const AppStore = signalStore(
    withState(initialSlice), 
    withComputed(store => ({
        currentStepIndex: computed(() => currentStepIndex(store.steps())), 
        currentStep: computed(() => currentStep(store.steps())),
    })), 
    withMethods(store => ({
        nextStep() {
            patchState(store, toggleStep())
        }
    }))
)