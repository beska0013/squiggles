import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,AfterViewInit {

  constructor(  private gsapSrv: GsapServiceService) { }

    @ViewChild('form') contactF!:ElementRef;
    @ViewChild('name') nameL!:ElementRef;
    @ViewChild('email') emailL!:ElementRef;
    @ViewChild('question') questionL!:ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.gsapSrv.hideCmp([
      this.contactF.nativeElement.children,
      this.nameL.nativeElement,
      this.emailL.nativeElement,
      this.questionL.nativeElement,
      this.nameL.nativeElement.children,
      this.emailL.nativeElement.children,
      this.questionL.nativeElement.children,

    ])

    this.gsapSrv.fadeInCmp([
      this.contactF.nativeElement.children,
      this.nameL.nativeElement,
      this.emailL.nativeElement,
      this.questionL.nativeElement,
      this.nameL.nativeElement.children,
      this.emailL.nativeElement.children,
      this.questionL.nativeElement.children,

    ],this.contactF)

  }

}
