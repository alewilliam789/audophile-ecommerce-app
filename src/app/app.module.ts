import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SocialMediaLinksComponent } from './footer/social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeadphonesComponent,
    EarphonesComponent,
    SpeakersComponent,
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
