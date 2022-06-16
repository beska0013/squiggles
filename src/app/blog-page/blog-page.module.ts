import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes =[
  {
    path:'',
    component:BlogPageComponent
  }
]

@NgModule({
    declarations: [
        BlogPageComponent
    ],
    exports: [
        BlogPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class BlogPageModule { }
