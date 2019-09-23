import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollEventModule } from 'ngx-scroll-event';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HomeComponent } from './home/home.component';
import { CoursePageCardComponent } from './course-page-card/course-page-card.component';
import { PagesCardCollectorComponent } from './pages-card-collector/pages-card-collector.component';
import { LandingPageCardComponent } from './landing-page-card/landing-page-card.component';
import { EventPageCardComponent } from './event-page-card/event-page-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page1Component } from './page1/page1.component';
import { CardPageComponent } from './card-page/card-page.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReservationPageCardComponent } from './reservation-page-card/reservation-page-card.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursePageCardComponent,
    PagesCardCollectorComponent,
    LandingPageCardComponent,
    EventPageCardComponent,
    WelcomeComponent,
    Page1Component,
    CardPageComponent,
    AdvantagesComponent,
    ContactsComponent,
    ReservationPageCardComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollEventModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
