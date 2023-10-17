import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { ProductSliderComponent } from './home/product-highlight/product-slider/product-slider.component';
import { ButtonComponent } from './shared/button/button.component';
import { ProductHighlightComponent } from './home/product-highlight/product-highlight.component';
import { SliderHighlightDirective } from './home/product-highlight/product-slider/slider-highlight.directive';

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
    SocialMediaLinksComponent,
    ProductSliderComponent,
    ButtonComponent,
    ProductHighlightComponent,
    SliderHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
