import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';


const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'headphones', component: HeadphonesComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'earphones', component: EarphonesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
