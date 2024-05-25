import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IGadget } from "../interface.ts/gadget.interface";

@Injectable({ providedIn: "root" })
export class GadgetService {

  private myGadgets: IGadget[] = [ // API mock data
    {
      type: 'Mobile',
      brand: 'Vivo V19'
    },
    {
      type: 'Ear phone',
      brand: 'Sony Ear Phone'
    },
    {
      type: 'Watch',
      brand: 'Fire bolt'
    },
    {
      type: 'Laptop',
      brand: 'Lenovo thinkpad'
    }
  ]

  getGadgets(): Observable<IGadget[]> {
    console.log('All gadgets', of(this.myGadgets))
    return of(this.myGadgets)
  }

  addGadget(newGadget: IGadget): Observable<IGadget> {
    this.myGadgets = [
      ...this.myGadgets,
      newGadget
    ]
    return of(newGadget)
  }

  updateGadget(gadget: IGadget): Observable<IGadget> {
    this.myGadgets.map((item) => item.type === gadget.type ? gadget : item)

    return of(gadget)
  }

  deleteGadget(gadget: IGadget): Observable<IGadget> {
    this.myGadgets.filter((item) => item.type !== gadget.type)

    return of(gadget)
  }
}
