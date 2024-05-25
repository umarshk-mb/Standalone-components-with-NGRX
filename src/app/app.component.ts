import { IGadgetState } from './store/gadgets/gadget.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { IGadget } from './store/interface.ts/gadget.interface';
import { Store } from '@ngrx/store';
import * as gadgetActions from './store/gadgets/gadget.actions';
import * as gadgetSelectors from './store/gadgets/gadget.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gadgets-app-ngrx';

  appName = 'My Gadgets'

  myGadgets: Observable<IGadget[]> | undefined;
  isLoading: Observable<boolean> = of(false);

  constructor(private store: Store<IGadgetState>) { }

  ngOnInt(): void {
    this.initSubscription()
  }

  getGadgets() {
    this.store.dispatch(gadgetActions.getGadgets())
  }

  addGadget() {
    const gadget: IGadget = {
      type: 'Mouse',
      brand: 'Lenovo'
    }
    this.store.dispatch(gadgetActions.addGadget({ gadget }))
  }

  deleteGadget(gadget: IGadget) {
    this.store.dispatch(gadgetActions.deleteGadget({ gadget }))
  }

  private initSubscription() {
    this.myGadgets = this.store.select(gadgetSelectors.selectGadgets);
    this.isLoading = this.store.select(gadgetSelectors.selectGadgetLoading);
  }
}
