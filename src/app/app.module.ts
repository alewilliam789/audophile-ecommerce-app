import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { SocialMediaLinksComponent } from './shared/footer/social-media-links/social-media-links.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadphonesComponent,
    EarphonesComponent,
    SpeakersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
