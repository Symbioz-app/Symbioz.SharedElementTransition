import { Injectable } from '@angular/core';
import { animate, AnimationBuilder, group, keyframes, query, style } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SymbiozSharedElementTransitionService {
  mapping = new Map<string, Element[]>();

  constructor(
    private animationBuilder: AnimationBuilder) {
  }

  transitionToElement(layout: string, nativeElement: Element) {
    if (!this.mapping.has(layout)) {
      this.mapping.set(layout, []);
    }

    let elements = this.mapping.get(layout);
    if (!elements?.length) {
      elements?.push(nativeElement);
    } else if(elements?.length === 1 && elements[0] !== nativeElement) {
      elements?.push(nativeElement);
      let source = getComputedStyle(elements[0]);
      let target = getComputedStyle(nativeElement);
      let sourceObj = {};
      let targetObj = {};
      for(const sourceProperty in source) {
        const sourceValue = source[sourceProperty];
        const targetValue = target[sourceProperty];

        if( sourceProperty === 'length' || sourceProperty === 'cssText' || typeof sourceValue === "function" ) {
          continue;
        }

        if( sourceValue !== targetValue ) {
          // @ts-ignore
          sourceObj[sourceProperty] = sourceValue;
          // @ts-ignore
          targetObj[sourceProperty] = targetValue;
        }
      }
      const animationMetaData = [
        style({
          ...sourceObj,
        }),
        style({
          ...targetObj
        })
      ]


      const animation = this.animationBuilder.build([
        group([
          query(`[layout=${layout}]`, [
            style({position: 'absolute'}),
            animate('300ms', keyframes(animationMetaData))
          ])
        ])
      ]);

      const player = animation.create(document.body);
      player.play();
      player.onDone(() => {
        player.reset();
        elements?.shift();
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
