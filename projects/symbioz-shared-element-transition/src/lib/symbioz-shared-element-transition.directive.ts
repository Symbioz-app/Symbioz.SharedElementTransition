import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SymbiozSharedElementTransitionService } from './symbioz-shared-element-transition.service';

@Directive({
  selector: '[layout]'
})
export class SymbiozSharedElementTransitionDirective implements OnInit, AfterViewChecked {

  @Input() layout!: string;

  constructor(
    private el: ElementRef,
    private sharedElementTransitionService: SymbiozSharedElementTransitionService,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if(this.layout) {
      this.renderer.setAttribute(this.el.nativeElement, 'layout-attr', this.layout);
      this.sharedElementTransitionService.transitionToElement(this.layout, this.el.nativeElement);
    }
  }

}
