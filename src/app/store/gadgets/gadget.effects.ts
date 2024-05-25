import { Injectable } from "@angular/core";
import { GadgetService } from "../service.ts/gadgets.service";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as gadgetAction from './gadget.actions';
import { map, switchMap } from "rxjs";
import { IGadget } from "../interface.ts/gadget.interface";

@Injectable()
export class GadgetEffects {
  constructor(private readonly actions$: Actions, private readonly gadgetService: GadgetService) { }

  getGadgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gadgetAction.getGadgets),
      switchMap(() => this.gadgetService.getGadgets()),
      map((gadgets: IGadget[]) => gadgetAction.getGadgetsSuccess({ gadgets }))
    ));

  addGadget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gadgetAction.addGadget),
      switchMap(({ gadget }) => this.gadgetService.addGadget(gadget)),
      map((gadget: IGadget) => gadgetAction.addGadgetSuccess({ gadget }))
    )
  );

  deleteGadget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(gadgetAction.deleteGadget),
      switchMap(({ gadget }) => this.gadgetService.deleteGadget(gadget)),
      map((gadget) => gadgetAction.deleteGadgetSuccess({ gadget }))
    )
  )

}
