import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements  AfterViewInit {

  constructor(private gsapSrv: GsapServiceService) { }

  @ViewChild('contaioner') container!: ElementRef
  @ViewChild('ph_container') ph_container!: ElementRef
  @ViewChild('title') title!: ElementRef
  @ViewChild('text') text!: ElementRef




  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.gsapSrv.hideCmp([
      this.container.nativeElement,
      this.ph_container.nativeElement,
      this.title.nativeElement,
      this.text.nativeElement,
    ])

    this.gsapSrv.fadeInCmp([
      this.container.nativeElement,
      this.ph_container.nativeElement,
      this.title.nativeElement,
      this.text.nativeElement,
    ],this.container)


  }
}
