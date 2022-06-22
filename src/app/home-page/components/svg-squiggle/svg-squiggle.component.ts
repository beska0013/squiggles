import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
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

  ngOnInit(): void {


  }
 checkAnimationState(){
   gsap.registerPlugin(ScrollTrigger);
    const animationEnd = sessionStorage.getItem('animationEnd');
    if(!(!!animationEnd && (animationEnd ==='true'))){
      this.gsapSrv.drawPathListFPart(this.svgPath.nativeElement.children).then(()=>{
        this.gsapSrv.drawPathListLPart(this.svgPath.nativeElement.children, this.observerIterceptor )
      })


    }
  }

  ngAfterViewInit(): void {
    // console.count('#')
    // setTimeout(()=>{
    //   console.log(this.observerIterceptor);
    // },100)


    this.checkAnimationState()

  }






}
