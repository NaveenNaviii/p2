import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InterviewComponent } from './components/interview/interview.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'int',component:InterviewComponent},
  {path:'feature',loadChildren:()=>import('./feature-module/feature-module.module')
    .then(x=>x.FeatureModuleModule)},
  {path:'**',component:PageNotFoundComponent},// wildcard routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
