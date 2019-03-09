import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';


const appRoutes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( appRoutes
      )
  ],
  exports: [
    RouterModule
  ]

})


export class AppRoutingModule { }
