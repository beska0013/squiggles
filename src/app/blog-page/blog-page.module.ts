import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './component/header/header.component';
import {BlogResolver} from "./resolvers/blog.resolver";
import {BlogListComponent} from "./component/blog-list/blog-list.component";
import {BlogArticleComponent} from "./component/blog-article/blog-article.component";
import {ArticleResolver} from "./resolvers/article.resolver";


const routes: Routes =[
  {
    path:'',
    component: BlogPageComponent,
    children:[
      {
        path:'',
        component: BlogListComponent,
        resolve: {blogs: BlogResolver},
      },
      {
        path: 'current_article',
        component: BlogArticleComponent,
        resolve: {data: ArticleResolver}
      }
    ]
  }
]

@NgModule({
    declarations: [
        BlogPageComponent,
        BlogListComponent,
        BlogArticleComponent,
        HeaderComponent
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
