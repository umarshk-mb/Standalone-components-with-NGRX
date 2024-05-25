import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { gadgetsReducer } from './app/store/gadgets/gadget.reducer';
import { provideEffects } from '@ngrx/effects';
import { GadgetEffects } from './app/store/gadgets/gadget.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideEffects(GadgetEffects),
    provideStore(gadgetsReducer),
    provideStoreDevtools({}),
  ]
})
  .catch((err) => console.error(err));
