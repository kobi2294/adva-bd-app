import {signalStore, withComputed, withState} from '@ngrx/signals';
import { initialSlice } from './app.slice';
import { currentStep, currentStepIndex } from './app.updaters';
import { computed } from '@angular/core';

export const AppStore = signalStore(
    withState(initialSlice), 
    withComputed(store => ({
        currentStepIndex: computed(() => currentStepIndex(store.steps())), 
        currentStep: computed(() => currentStep(store.steps())),
    }))
)