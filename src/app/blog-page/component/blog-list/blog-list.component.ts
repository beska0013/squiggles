import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router
  ) { }
  $blogData = this.activeRoute.snapshot.data['blogs']

  showBlogPost(blogData: string[]){

    this.router.navigate(['blog-page/current_article'], {state: {data: blogData}})
  }
  ngOnInit(): void {
  }

}
