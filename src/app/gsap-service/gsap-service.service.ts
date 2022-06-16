import {ElementRef, Injectable} from '@angular/core';
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapServiceService {

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



   drawPathListFPart(path:any[]){

    const pathList = gsap.utils.toArray(path);
    const plFirstPart = pathList.splice(0,75);

    const animationStart = sessionStorage.getItem('animationStart');
    console.log(!(!!animationStart && (animationStart ==='true')))

    gsap.timeline().set(pathList,{visibility:'hidden',})
      .from(plFirstPart, {
        visibility:'hidden',
        overwrite: true,
        stagger: .01,
        ease:'expo.out',
        onComplete: () => this.drawPathListMainPart(pathList)
      })


  }

   drawPathListMainPart(pathList:any[]){
    console.log('hello')
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
}
