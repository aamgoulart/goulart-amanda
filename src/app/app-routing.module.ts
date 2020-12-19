import { CourcesComponent } from './cources/cources.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { Semana01Component } from './semanas/semana01/semana01.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Semana02Component } from './semanas/semana02/semana02.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'week01',
    component: Semana01Component,
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'week02',
    component: Semana02Component,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'cources',
    component: CourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
