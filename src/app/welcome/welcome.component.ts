import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debug } from 'util';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('fade', [
      state('initial', style({
        opacity: 0.001
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final => initial', animate('1000ms'))
    ]),
  ]
})
export class WelcomeComponent implements OnInit {


  title0 = '';
  title0D = ['Scaliseraoul.com', 'Ciao, sono Raoul'];

  title1 = '';
  title1D = ['Siti web professionali', 'Sviluppatore Web e Mobile'];

  title2 = '';
  title2D = ['per la tua attività', 'con sede a Modena, Italia'];

  height = 0;
  l = 0;

  fadeInStates: string[] = ['initial', 'initial', 'initial', 'initial', 'initial'];

  constructor() {
  }

  delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(() => { resolve(); }, ms));
  }

  async scrollDown() {
    for (let i = 0; i < 30; i++) {
      window.scrollBy(0, (this.height / 30));
      await this.delay(1.1);
    }
  }

  async titleAnimation() {
    await this.delay(1500);
    this.fadeInStates[0] = 'final';
    for (const c of this.title0D[this.l]) {
      this.title0 = this.title0 + c;
      await this.delay(40);
    }

    this.fadeInStates[1] = 'final';
    for (const c of this.title1D[this.l]) {
      this.title1 = this.title1 + c;
      await this.delay(20);
    }

    this.fadeInStates[2] = 'final';
    for (const c of this.title2D[this.l]) {
      this.title2 = this.title2 + c;
      await this.delay(20);
    }

    this.fadeInStates[3] = 'final';
    this.fadeInStates[4] = 'final';
  }
  ngOnInit() {
    if (window.innerHeight > 500) {
      this.height = window.innerHeight;
    } else {
      this.height = 500;
    }

    this.titleAnimation();
  }

}
