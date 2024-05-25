import { createAction, props } from '@ngrx/store';
import { IGadget } from '../interface.ts/gadget.interface';

export const getGadgets = createAction('[Gadget] Get gadgets');
export const getGadgetsSuccess = createAction('[Gadget] Get gadgetes Success', props<{ gadgets: IGadget[]; }>())
export const addGadget = createAction('[Gadget] Add Gadget', props<{ gadget: IGadget }>())
export const addGadgetSuccess = createAction('[Gadget] Add Gadget Success', props<{ gadget: IGadget }>());
export const deleteGadget = createAction('[Gadget] Remove Gadget', props<{ gadget: IGadget }>())
export const deleteGadgetSuccess = createAction('[Gadget] Remove gadget success', props<{ gadget: IGadget }>())

