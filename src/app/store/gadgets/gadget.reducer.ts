import { createReducer, on, Action } from '@ngrx/store';
import { IGadgetState } from './gadget.model';
import * as gadgetActions from './gadget.actions';
import { filter } from 'rxjs';


export const initialGadgetState: IGadgetState = {
  gadgets: [],
  isLoading: false,
}

const _reducer = createReducer(
  initialGadgetState,
  on(gadgetActions.getGadgets, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(gadgetActions.getGadgetsSuccess, (state, { gadgets }) => {
    return {
      ...state,
      isLoading: false,
      gadgets,
    }
  }),

  on(gadgetActions.addGadget, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),

  on(gadgetActions.addGadgetSuccess, (state, { gadget }) => {
    return {
      ...state,
      gadgets: [...state.gadgets, gadget],
      isLoading: false
    }
  }),

  on(gadgetActions.deleteGadget, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(gadgetActions.deleteGadgetSuccess, (state, { gadget }) => {
    return {
      ...state,
      isLoading: false,
      gadgets: state.gadgets.filter((dGadget) => dGadget.type !== gadget.type)
    }
  })

)

export function gadgetsReducer(state = initialGadgetState, actions: Action): IGadgetState {
  return _reducer(state, actions);
}
