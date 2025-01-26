import {getState, patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import { initialSlice } from './app.slice';
import { currentStep, currentStepIndex, toggleStep } from './app.updaters';
import { computed, effect } from '@angular/core';

export const AppStore = signalStore(
    withState(initialSlice), 
    withComputed(store => ({
        currentStepIndex: computed(() => currentStepIndex(store.steps())), 
        currentStep: computed(() => currentStep(store.steps())),
    })), 
    withMethods(store => ({
        nextStep() {
            patchState(store, toggleStep())
        }, 
        reset() {
            patchState(store, initialSlice)
        }
    })), 
    withHooks(store => ({
        onInit() {
            const json = localStorage.getItem('app');
            if (json) {
                const state = JSON.parse(json);
                patchState(store, state);
            }
            effect(() => {
                const state = getState(store);
                const json = JSON.stringify(state);
                localStorage.setItem('app', json);
            })
        }

    }))
)