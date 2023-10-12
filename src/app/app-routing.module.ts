import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'headphones', component: HeadphonesComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'earphones', component: EarphonesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
