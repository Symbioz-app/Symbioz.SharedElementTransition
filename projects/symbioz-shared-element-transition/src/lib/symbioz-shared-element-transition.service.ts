import { Injectable } from '@angular/core';
import { animate, AnimationBuilder, group, keyframes, query, style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SymbiozSharedElementTransitionService {
  mapping = new Map<string, Element[]>();

  constructor(
    private animationBuilder: AnimationBuilder,) {
  }

  transitionToElement(layout: string, nativeElement: any) {
    if (!this.mapping.has(layout)) {
      this.mapping.set(layout, []);
    }

    let elements = this.mapping.get(layout);
    if (!elements?.length) {
      elements?.push(nativeElement);
    } else if(elements?.length === 1) {
      let source = this.getElementPositioning(elements[0]);
      let target = this.getElementPositioning(nativeElement);
      const animationMetaData = [
        style({
          ...source,
        }),
        style({
          ...target
        })
      ]


      const animation = this.animationBuilder.build([
        group([
          query('*:not([layout])', [
            style({
              opacity: 0
            }),
            animate('300ms', style({
              opacity: 1,
            }))
          ]),
          query(`[layout=${layout}]`, [
            style({position: 'absolute'}),
            animate('300ms', keyframes(animationMetaData))
          ])
        ])
      ]);

      const player = animation.create(nativeElement.nativeElement);
      player.play();
      player.onDone(() => {
        player.reset();
        elements?.splice(0, 1, nativeElement);
      });
    }

  }

  getElementPositioning(el: Element): IElementPositioning {
    const rect = el.getBoundingClientRect();

    return {
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top
    };
  }
}

interface IElementPositioning {
  top: number;
  left: number;
  width: number;
  height: number;
}
