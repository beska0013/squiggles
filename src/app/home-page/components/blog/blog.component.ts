import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService, IBlog} from "../../../app.service";
import {bufferCount, map, Observable, take} from "rxjs";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";
import Draggable from "gsap/Draggable";






@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  trackByIndex(index: number, el:any){
    // this.draggable.forEach(d => d.enable())
    console.log(index);

    return index
  }

  tl = gsap.timeline();

  onDraggable( currentIndex:any){
    this.tl.kill();

    let y = window.innerWidth ||  document.body.clientWidth;
    if(y > 1020){ return }

    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    if(currentIndex < 0 )  currentIndex = this.blCart.nativeElement.children.length -1;
    prevIndex = currentIndex - 1 < 0 ? this.blCart.nativeElement.children.length -1  : currentIndex -1;
    nextIndex = currentIndex + 1 > this.blCart.nativeElement.children.length -1 ? 0  : currentIndex + 1;

    const tl = gsap.timeline();

    const onProgress = () =>  {

      // if(gsap.getProperty(this.blCart.nativeElement.children[currentIndex], "x") <  0){
      //   tl.to( this.blCart.nativeElement.children[currentIndex],{ x: '-200%',duration: .2})
      //     .to( this.blCart.nativeElement.children[nextIndex],{
      //       x: '0%',
      //       ease: "elastic.out(2, 1)",
      //       duration: 1,
      //     },'<50%')
      //     .set( this.blCart.nativeElement.children[prevIndex],{x: '200%'})
      // }
      //
      // if(gsap.getProperty(this.blCart.nativeElement.children[currentIndex], "x") >  0){
      //   tl.to( this.blCart.nativeElement.children[currentIndex],{ x: '200%',duration: .2})
      //     .to( this.blCart.nativeElement.children[prevIndex],{
      //       x: '0%',
      //       ease: "elastic.out(2, 1)",
      //       duration: 1,
      //     },'<50%')
      //     .set( this.blCart.nativeElement.children[nextIndex],{x: '-200%'})
      // }
      //


      // draggable.disable()
    }



    const draggable = Draggable.create(this.blCart.nativeElement.children[currentIndex],{
      type: 'x',
      trigger: this.blCart.nativeElement.children[currentIndex],
      id: currentIndex,
      onDrag: () => {
        this.tl = gsap.timeline();

        if(gsap.getProperty(this.blCart.nativeElement.children[currentIndex], "x") <  0){
          tl.to( this.blCart.nativeElement.children[currentIndex],{ x: '-200%',duration: .2})
            .to( this.blCart.nativeElement.children[nextIndex],{
              x: '0%',
              ease: "elastic.out(2, 1)",
              duration: 1,
            },'<50%')
            .set( this.blCart.nativeElement.children[prevIndex],{
              x: '200%',
              onEnd: () => this.onDraggable(nextIndex)
             })
        }

        if(gsap.getProperty(this.blCart.nativeElement.children[currentIndex], "x") >  0){
          tl.to( this.blCart.nativeElement.children[currentIndex],{ x: '200%',duration: .2})
            .to( this.blCart.nativeElement.children[prevIndex],{
              x: '0%',
              ease: "elastic.out(2, 1)",
              duration: 1,
            },'<50%')
            .set( this.blCart.nativeElement.children[nextIndex],{
              x: '-200%',
              onEnd: () => this.onDraggable(prevIndex)
            })
        }
        draggable.forEach(d => d.disable())
      }
    })
  }



  resetBlogItems(){
    let y = window.innerWidth ||  document.body.clientWidth;
    if( y <= 1020){
      gsap.set(this.blCart.nativeElement.children, {x:'200%'});
      gsap.set(this.blCart.nativeElement.children[0], {x:'0%'});
      gsap.set(this.blCart.nativeElement.children[this.blCart.nativeElement.children.length - 1], {x:'-200%'});
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger, Draggable);

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

    this.resetBlogItems();

    this.onDraggable(0)
  }

}



