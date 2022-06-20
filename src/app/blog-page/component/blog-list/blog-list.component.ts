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

  showBlogPost(blogData:{title: string, text: string[]} ){

    this.router.navigate([`blog/${blogData.title}`], {state: {data: blogData}})
  }
  ngOnInit(): void {
    // console.log(this.$blogData);
  }

}
