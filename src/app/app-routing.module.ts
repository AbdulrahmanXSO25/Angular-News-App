import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EgyComponent } from './egy/egy.component';
import { UaeComponent } from './uae/uae.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'egy', component: EgyComponent },
  { path: 'uae', component: UaeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.
    forRoot(
      routes,
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
