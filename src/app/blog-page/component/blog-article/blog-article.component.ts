import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";

@Component({
  selector: 'app-blog-page-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private srvGsap: GsapServiceService

    ) {this.srvGsap.$articalePage.next(true); }

  current_bl = this.activeRoute.snapshot.data['data'] ?
               this.activeRoute.snapshot.data['data'] :
               JSON.parse( (sessionStorage.getItem('article'))!.toString() )





  ngOnInit(): void {

   this.activeRoute.snapshot.data['data'] ?
  console.log('route',this.activeRoute.snapshot.data['data']) :
  console.log('session',)
  }

  ngOnDestroy(): void {
    this.srvGsap.$articalePage.next(false);
  }

}
