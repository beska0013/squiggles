import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-page-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
this.activeRoute.snapshot.data['data'] ?
  console.log('route',this.activeRoute.snapshot.data['data']) :
  console.log('session',JSON.parse( (sessionStorage.getItem('article'))!.toString() ))
  }

}
