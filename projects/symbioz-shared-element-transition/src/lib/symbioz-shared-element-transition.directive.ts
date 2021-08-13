import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SymbiozSharedElementTransitionService } from './symbioz-shared-element-transition.service';

@Directive({
  selector: '[layout]'
})
export class SymbiozSharedElementTransitionDirective implements OnInit, AfterViewInit {

  @Input() layout!: string;

  constructor(
    private el: ElementRef,
    private sharedElementTransitionService: SymbiozSharedElementTransitionService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sharedElementTransitionService.transitionToElement(this.layout, this.el.nativeElement);
  }

}
