import {AfterViewInit, Component, Output, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  AfterViewInit {

  btnMob = false;

  burgerBtnHandler = () => {
    this.btnMob = !this.btnMob;
    this.navState.emit(this.btnMob);
  }

  @ViewChild('headerOne') h1!: ElementRef
  @ViewChild('headerTwo') h2!: ElementRef

  @Output() navState = new EventEmitter<boolean>()


  constructor(private gsapSrv: GsapServiceService) { }



  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.gsapSrv.hideCmp([
      this.h1.nativeElement,
      this.h2.nativeElement
    ])

  this.gsapSrv.fadeInCmp([
    this.h1.nativeElement,
    this.h2.nativeElement
  ], this.h1)


  }

}
