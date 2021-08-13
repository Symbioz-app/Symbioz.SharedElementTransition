import { NgModule } from '@angular/core';
import { SymbiozSharedElementTransitionDirective } from './symbioz-shared-element-transition.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SymbiozSharedElementTransitionDirective,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    SymbiozSharedElementTransitionDirective
  ]
})
export class SymbiozSharedElementTransitionModule {
}
