import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-svg-squiggle',
  templateUrl: './svg-squiggle.component.html',
  styleUrls: ['./svg-squiggle.component.scss']
})
export class SvgSquiggleComponent implements OnInit, AfterViewInit {


  @ViewChild('path') svgPath!: ElementRef;

  @Input() observerIterceptor!:ElementRef


  constructor( private gsapSrv: GsapServiceService) { }

  ngOnInit(): void {}


  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.gsapSrv.drawPathListFPart(this.svgPath.nativeElement.children)
    this.gsapSrv.drawPathListLPart(this.svgPath.nativeElement.children, this.observerIterceptor )


  }




}
