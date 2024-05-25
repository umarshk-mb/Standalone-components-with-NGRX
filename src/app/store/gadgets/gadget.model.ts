import { IGadget } from "../interface.ts/gadget.interface";

export interface IGadgetState {
  gadgets: IGadget[],
  isLoading: boolean
}
