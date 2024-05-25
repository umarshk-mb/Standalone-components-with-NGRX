import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGadgetState } from "./gadget.model";

export const selectGadgetState = createFeatureSelector<IGadgetState>('Gadget');
export const selectGadgetLoading = createSelector(selectGadgetState, (state) => state.isLoading);
export const selectGadgets = createSelector(selectGadgetState, (state) => state.gadgets);
