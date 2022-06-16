import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService, IBlog} from "../../../app.service";
import {bufferCount, map, Observable, take} from "rxjs";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";






@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit {

  constructor(
    private appSrv: AppService,
    private gsapSrv: GsapServiceService
  ) { }

  @ViewChild('blContainer') blContainer!:ElementRef;
  @ViewChild('blCart') blCart!:ElementRef;
  @ViewChild('blTitle') blTitle!:ElementRef;
  @ViewChild('blBtn') blBtn!:ElementRef;

  $blogItems:any = this.appSrv.getBlogs().pipe( map( items => items.slice(0,3)))


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);

    this.gsapSrv.hideCmp([
      this.blCart.nativeElement.children,
      this.blTitle.nativeElement,
      this.blBtn.nativeElement,

    ])

    this.gsapSrv.fadeInCmp([
      this.blContainer.nativeElement,
      this.blCart.nativeElement.children,
      this.blTitle.nativeElement,
      this.blBtn.nativeElement,
    ],this.blContainer)
  }

}



