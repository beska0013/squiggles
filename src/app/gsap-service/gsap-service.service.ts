import {ElementRef, Injectable} from '@angular/core';
import {gsap} from "gsap";

import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GsapServiceService {

  $articalePage = new BehaviorSubject<boolean>(false);
  articalePage = () => this.$articalePage as Observable<boolean>;

  constructor() { }


  hideCmp(arg:any[]){
    gsap.set(
      arg,
      {
        y: 100,
        autoAlpha: 0
      })
  }

  fadeInCmp(arg:any[], target:ElementRef){
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: target.nativeElement,
          start:'top 90%',
          end: 'top'
        }
      })

    tl.to(arg,{
      autoAlpha: 1,
      duration: 1,
      y: 0,
      stagger: 0.1,
    })

  }



   async drawPathListFPart(path:any[]){

    const pathList = gsap.utils.toArray(path);
    const plFirstPart = pathList.splice(0,75);



    return  gsap.timeline().set(pathList,{visibility:'hidden',})
      .from(plFirstPart, {
        visibility:'hidden',
        overwrite: true,
        stagger: .01,
        ease:'expo.out',
        onComplete: () => this.drawPathListMainPart(pathList)
      })


  }

   drawPathListMainPart(pathList:any[]){

    sessionStorage.setItem('animationStart', 'true')
    pathList.forEach(( p: any) =>{

      gsap.timeline().to( p, {
        visibility:'visible',
        stagger: .001,
        scrollTrigger: {
          trigger: p,
          start: 'top top',
          end: 'top',
        },
      })
    })
  }

   drawPathListLPart(path:any[], el:ElementRef){

    let plLPart;
    const pathList = gsap.utils.toArray(path);
    const footer = el.nativeElement;
    const options = {
      threshold: .9
    }

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(ent =>{
        if(ent.isIntersecting){
          plLPart = pathList.filter((item:any) => item.style.visibility === 'hidden');
          gsap.timeline().to(plLPart, {
            visibility:'visible',
            overwrite: true,
            stagger: .005,
            ease: "none",
            onComplete: ()=> sessionStorage.setItem('animationEnd', 'true')
          })
        }
      })

    }, options);
    observer.observe(footer);
  }


  onTouchinitialXPos = (event: TouchEvent) => event.changedTouches[0].clientX;

  onTouchEnd( event: TouchEvent,
              currentIndex:number,
              elementImg: any,
              initialPosX: number,
              elementText?: any){
    let currentXPos = event.changedTouches[0].clientX;
    let currentYPos = event.changedTouches[0].clientY;
    console.log(currentYPos);

    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    const imgSlLength = elementImg.nativeElement.children.length;

    if(currentIndex < 0 )  currentIndex = imgSlLength -1;
    prevIndex = currentIndex - 1 < 0 ? imgSlLength -1  : currentIndex -1;
    nextIndex = currentIndex + 1 > imgSlLength -1 ? 0  : currentIndex + 1;

    if(currentXPos < initialPosX){
      gsap.timeline()
        .to(
          [
            elementImg.nativeElement.children[currentIndex],
            elementText?.nativeElement?.children[currentIndex]
          ],
          {
            autoAlpha: 0,
            stagger: 0.1
          }).to([
          elementImg.nativeElement.children[nextIndex],
          elementText?.nativeElement?.children[nextIndex]
        ],
        {
          autoAlpha: 1,
          stagger: 0.1
        },'<10%')

    }

    if(currentXPos > initialPosX){
      // console.log('right')
      gsap.timeline().to(
        [
          elementImg.nativeElement.children[currentIndex],
          elementText?.nativeElement?.children[currentIndex]
        ],
        {
          autoAlpha: 0,
          stagger: 0.1
        }).to(
        [
          elementImg.nativeElement.children[prevIndex],
          elementText?.nativeElement?.children[prevIndex]
        ],
        {
          autoAlpha: 1,
          stagger: 0.1
        },'<10%')

    }
  }
}
