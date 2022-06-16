import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import {SvgSquiggleComponent} from "./components/svg-squiggle/svg-squiggle.component";
import { CompaniesComponent } from './components/companies/companies.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes =[
  {
    path:'',
    component: HomePageComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    SvgSquiggleComponent,
    AboutComponent,
    CompaniesComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
