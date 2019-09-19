import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ScrollEvent } from 'ngx-scroll-event';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('initial', style({
        opacity: 0.001
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final => initial', animate('1000ms'))
    ]),
    trigger('arrow', [
      state('initial', style({
        opacity: 1,
        height: '30px',
        width: '30px'
      })),
      state('final', style({
        opacity: 1,
        height: '40px',
        width: '40px'
      })),
      transition('initial=>final', animate('100ms')),
      transition('final => initial', animate('100ms'))
    ]),
    trigger('more', [
      state('initial', style({
        opacity: 1,
        width: '130px',
      })),
      state('final', style({
        opacity: 1,
        width: '150px'
      })),
      transition('initial=>final', animate('100ms')),
      transition('final => initial', animate('100ms'))
    ]),
    trigger('rotation', [
      state('initial', style({
        opacity: 0.0,
        transform: 'rotate3d(0, 1, 0, 60deg)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      transition('initial=>final', animate('150ms')),
      transition('final => initial', animate('100ms'))
    ]),
  ],
})
export class HomeComponent implements OnInit {
  /* tslint:disable: max-line-length */

  l = 0;

  titolo = '';
  titoloD = '';

  presentazione = '';
  presentazioneD = ['Scaliseraoul.com', 'Ciao, sono Raoul'];

  presentazione2 = '';
  presentazione2D = ['Affordable tailor-made web sites ', 'Sviluppatore Web e Mobile'];

  presentazione3 = '';
  presentazione3D = ['built with impressive design', 'con sede a Modena, Italia'];


  websiteVisible = false;
  website = '';
  websiteD = ['Boost Your Brand!', ''];
  website2 = '';
  website2D = ['Share your brand values,', ''];
  website3 = '';
  website3D = ['seek for visibility and reliability ', ''];
  website4 = [
    'Get your Website done!', ''];
  website5 = [
    'Prove your credibility', ''];
  website6 = [
    'Expand your network', ''];
  website7 = [
    'Beat the competition', ''];

  appVisible = false;
  app = '';
  appD = ['Reach the top!', ''];
  app2 = '';
  app2D = [
    'Improve your user engagement', ''];
  app3 = '';
  app3D = [
    'creating attraction and retention', ''];
  app4 = [
    'Get your Mobile App done!', ''];
  app5 = [
    'Build customer loyalty', ''];
  app6 = [
    'Boosts brand recognition', ''];
  app7 = [
    'Stand out from the crowd', ''];

  customVisible = false;
  custom = '';
  customD = ['Create something new!', ''];
  custom2 = '';
  custom2D = [
    'Give life to your project', ''];
  custom3 = [
    'Get your Project done with the newest technologies!', ''];
  more = ['More Info', ''];

  contatti = '';
  contattiD = ['Contact me!', 'Contattami'];
  firenzeC = ['Florence', 'Firenze'];
  indirizzoH = ['Address', 'Indirizzo'];
  indirizzo = ['270/2 Pescia St. \n Modena, (MO)', 'Via Pescia 270/2 \n Modena, (MO)'];

  cv = ['Resume', 'Curriculum'];
  urlCv = ['assets/cv/CvEng.pdf', 'assets/cv/CvIta.pdf'];

  fadeInStates: string[] = [];
  panelStates: string[] = ['initial', 'initial', 'initial'];
  panelElementStates: string[] = [];
  arrowState = 'final';
  moreState = 'final';

  @ViewChild('websiteRef', null) websiteRef: ElementRef;
  @ViewChild('appRef', null) appRef: ElementRef;
  @ViewChild('customRef', null) customRef: ElementRef;
  @ViewChild('contattiRef', null) contattiRef: ElementRef;

  constructor() { }

  async presentazioneAnimation() {
    await this.delay(1500, null);
    this.fadeInStates[0] = 'final';

    for (const c of this.titoloD) {
      this.titolo = this.titolo + await this.delay(40, c);
    }

    this.fadeInStates[1] = 'final';
    for (const c of this.presentazioneD[this.l]) {
      this.presentazione = this.presentazione + await this.delay(40, c);
    }

    this.fadeInStates[2] = 'final';
    for (const c of this.presentazione2D[this.l]) {
      this.presentazione2 = this.presentazione2 + await this.delay(20, c);
    }
    for (const c of this.presentazione3D[this.l]) {
      this.presentazione3 = this.presentazione3 + await this.delay(20, c);
    }

    this.fadeInStates[3] = 'final';
    await this.delay(500, null);
    this.fadeInStates[4] = 'final';
  }

  async websiteAnimation() {
    if (this.websiteVisible === true) {
      return;
    }
    this.websiteVisible = true;

    this.fadeInStates[5] = 'final';
    for (const c of this.websiteD[this.l]) {
      this.website = this.website + await this.delay(40, c);
    }

    await this.delay(250, null);

    this.fadeInStates[6] = 'final';
    for (const d of this.website2D[this.l]) {
      this.website2 = this.website2 + await this.delay(20, d);
    }
    await this.delay(50, null);
    for (const m of this.website3D[this.l]) {
      this.website3 = this.website3 + await this.delay(20, m);
    }
    await this.delay(250, null);
    this.panelStates[0] = 'final';
    await this.delay(250, null);

    for (let i = 0; i <= 2; i++) {
      this.panelElementStates[i] = 'final';
      await this.delay(100, null);
    }

    await this.delay(250, null);
    this.fadeInStates[7] = 'final';
    await this.delay(250, null);
    this.fadeInStates[8] = 'final';
  }

  async appAnimation() {

    if (this.appVisible === true) {
      return;
    }
    this.appVisible = true;

    this.fadeInStates[9] = 'final';
    for (const c of this.appD[this.l]) {
      this.app = this.app + await this.delay(40, c);
    }

    await this.delay(250, null);

    this.fadeInStates[10] = 'final';
    for (const d of this.app2D[this.l]) {
      this.app2 = this.app2 + await this.delay(20, d);
    }
    await this.delay(50, null);
    for (const d of this.app3D[this.l]) {
      this.app3 = this.app3 + await this.delay(20, d);
    }
    await this.delay(250, null);
    this.panelStates[1] = 'final';
    await this.delay(250, null);

    for (let i = 3; i <= 5; i++) {
      this.panelElementStates[i] = 'final';
      await this.delay(100, null);
    }

    await this.delay(250, null);
    this.fadeInStates[11] = 'final';
    await this.delay(250, null);
    this.fadeInStates[12] = 'final';
  }

  async customAnimation() {
    if (this.customVisible === true) {
      return;
    }
    this.customVisible = true;

    this.fadeInStates[13] = 'final';
    for (const c of this.customD[this.l]) {
      this.custom = this.custom + await this.delay(40, c);
    }

    await this.delay(250, null);

    this.fadeInStates[14] = 'final';
    for (const d of this.custom2D[this.l]) {
      this.custom2 = this.custom2 + await this.delay(20, d);
    }
    await this.delay(250, null);
    this.panelStates[2] = 'final';

    await this.delay(250, null);

    for (let i = 6; i <= 11; i++) {
      this.panelElementStates[i] = 'final';
      await this.delay(100, null);
    }

    await this.delay(250, null);
    this.fadeInStates[15] = 'final';
    await this.delay(250, null);
    this.fadeInStates[16] = 'final';
  }

  async contattiAnimation() {
    if (this.contatti.length !== 0) {
      return;
    }

    this.fadeInStates[17] = 'final';
    for (const c of this.contattiD[this.l]) {
      this.contatti = this.contatti + await this.delay(40, c);
    }

    await this.delay(350, null);
    this.fadeInStates[18] = 'final';
    await this.delay(350, null);
    this.panelElementStates[12] = 'final';

    await this.delay(350, null);
    this.fadeInStates[19] = 'final';
    for (let i = 13; i <= 17; i++) {
      this.panelElementStates[i] = 'final';
      await this.delay(200, null);
    }
  }

  @HostListener('window:scroll')
  async checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= this.websiteRef.nativeElement.offsetTop - 200) {
      this.websiteAnimation();
    }
    if (scrollPosition >= this.appRef.nativeElement.offsetTop - 200) {
      this.appAnimation();
    }
    if (scrollPosition >= this.customRef.nativeElement.offsetTop - 200) {
      this.customAnimation();
    }
    if (scrollPosition >= this.contattiRef.nativeElement.offsetTop - (window.innerHeight * 0.80)) {
      this.contattiAnimation();
    }
  }

  delay(ms: number, a: any): Promise<any> {
    return new Promise(resolve => setTimeout(() => { resolve(a); }, ms));
  }

  async goDown() {
    this.arrowState = 'initial';
    this.arrowState = await this.delay(100, 'final');
  }

  async getMore() {
    this.moreState = 'initial';
    this.moreState = await this.delay(100, 'final');
  }

  curriculum() {
    window.open(this.urlCv[this.l], '_blank');
  }

  ngOnInit() {
    const userLang = navigator.language;

    for (let i = 0; i <= 50; i++) {
      this.fadeInStates[i] = 'initial';
    }
    for (let i = 0; i <= 17; i++) {
      this.panelElementStates[i] = 'initial';
    }

    this.presentazioneAnimation();
  }
}
