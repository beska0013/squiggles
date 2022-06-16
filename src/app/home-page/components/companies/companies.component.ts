import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GsapServiceService} from "../../../gsap-service/gsap-service.service";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit {
  current!:number;
  prev!:number;
  next!:number;

  @ViewChild('sliderPic') sliderItemsImg!:ElementRef;
  @ViewChild('slideBox') slideBox!:ElementRef;
  @ViewChild('sliderText') sliderText!:ElementRef;
  @ViewChild('btnL') btnL!:ElementRef;
  @ViewChild('btnR') btnR!:ElementRef;

  constructor(private gsapSrv:GsapServiceService) { }

  sliderItems = [
    {
      logo:'./assets/images/sliderIcons/gl_lamp.svg',
      text:[
        "Galaxy Lamps is a direct to consumer ecommerce brand I founded in 2019. " +
        "I bootstraped it from 0-5mm in revenue in its first year. " +
        "Now we serve over 300,000 customers worldwide and have an" +
        " amazing team of creative thinkers, marketing wizards, and talented operators.",

        "At Galaxy Lamps, we're on a mission to transform the interior " +
        "lighting space. We believe that unique experiences " +
        "inspire people and that the right kind of light can " +
        "make all the difference in how we feel. That's why we've " +
        "created a line of lamps that are not only beautiful and" +
        " stylish but also provide a range of light colors and intensities" +
        " to suit any mood or need. From warm and inviting to bright and" +
        " energizing, our lamps provide the perfect light for any space. "
      ],
      imgMain:'./assets/images/compaies_cardOne/main.png',
      imgSec: [
        './assets/images/compaies_cardOne/secondaryOne.png',
        './assets/images/compaies_cardOne/secondaryTwo.png'
      ],

    },
    {
      logo:'./assets/images/sliderIcons/quailizeIcon.svg',
      text:[
        "I started Qualiize as a proprietary influencer marketing tool for Galaxy Lamps. There weren’t any products on the market that could accurately predict the performance of an influencer integration",
        "I wanted to create a product that would give brands the ability to make data-driven decisions when it came to their influencer marketing campaigns. The platform uses predictive analytics to rate the potential performance of an influencer based on various KPIs. We’ve been able to save thousands of dollars by identifying which influencers are most likely to generate a return on investment. If you’re looking for a tool that can help you run more successful and cost-effective influencer marketing, check us out."
      ],
      imgMain:'./assets/images/company_cardTwo/main.png',
      imgSec: [
        './assets/images/company_cardTwo/secondaryOne.png',
        './assets/images/company_cardTwo/secondaryTwo.png'
      ],

    },
    {
      logo:'./assets/images/sliderIcons/xclusiveIcon.svg',
      text:[
        "I started Xclusiv with 3 other co-founders in early 2021. Xclusiv is going to be a platform for creators to be able to monetize their content. We're building this because we believe that creators should be able to make a living off of their passion",
        "All too often, we see talented creators give up on their dreams because they can't make enough money to support themselves. With Xclusiv, we want to change that. We want to create a space where creators can not only make money but also connect with their fans and build a community. We are in the late stages of development and expect to launch our beta in Q3 of 2022."

      ],
      imgMain:'./assets/images/company_cardThree/main.png',
      imgSec: [
        './assets/images/company_cardThree/secondaryOne.png',
        './assets/images/company_cardThree/secondaryTwo.png'
      ],

    }
  ];

  btnLHandler(){
    const sliderItemsImg = this.sliderItemsImg.nativeElement.children;
    const sliderItemsTxt = this.sliderText.nativeElement.children;
    const imgSlLength = this.sliderItemsImg.nativeElement.children.length;
    this.btnL.nativeElement.disabled = true;
    this.btnR.nativeElement.disabled = true;

    this.current--;
    if(this.current < 0 )  this.current = imgSlLength -1;
    this.next = this.current - 1 < 0 ? imgSlLength -1  : this.current -1;
    this.prev = this.current + 1 > imgSlLength -1 ? 0  : this.current + 1;


    gsap.timeline().to( sliderItemsImg[this.prev], {
      x:'100%',
      stagger: 0.1,
      ease: "power3.out",
      onComplete: ()=> {
        gsap.timeline().to( sliderItemsTxt[this.prev],{
          autoAlpha: 0,
          ease: "power3.out",
          duration: .2,
        })
      }
    })
      .to(sliderItemsImg[this.current],{
        x:'0%',
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        onComplete: ()=> {
          gsap.timeline().to( sliderItemsTxt[this.current],{
            autoAlpha: 1,
            ease: "power3.out",
            duration: .4,
          }).set(sliderItemsImg[this.next],{
            x:'-100%',
            onComplete: () =>  {
              this.btnL.nativeElement.disabled = false;
              this.btnR.nativeElement.disabled = false;
            }
          },'<-.1')
        }
      },'< - .1')



    console.log('btnlHandler')
    console.log('current',this.current);
    console.log('next',this.next);
    console.log('prev',this.prev);
  }

  btnRHandler(){
    const sliderItemsImg = this.sliderItemsImg.nativeElement.children;
    const sliderItemsTxt = this.sliderText.nativeElement.children;
    const imgSlLength = this.sliderItemsImg.nativeElement.children.length;
    this.btnL.nativeElement.disabled = true;
    this.btnR.nativeElement.disabled = true;

    this.current++;
    if(this.current > imgSlLength -1)  this.current = 0;
    this.prev = this.current - 1 < 0 ? imgSlLength -1  : this.current -1;
    this.next = this.current + 1 > imgSlLength -1 ? 0  : this.current + 1;

    gsap.timeline().to( sliderItemsImg[this.prev], {
      x:'-100%',
      stagger: 0.1,
      ease: "power3.out",
      onComplete: ()=> {
        gsap.timeline().to( sliderItemsTxt[this.prev],{
          autoAlpha: 0,
          ease: "power3.out",
          duration: .2,
        })
      }
    })
      .to(sliderItemsImg[this.current],{
        x:'0%',
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        onComplete: ()=> {
          gsap.timeline().to( sliderItemsTxt[this.current],{
            autoAlpha: 1,
            ease: "power3.out",
            duration: .4,
          })
            .set(sliderItemsImg[this.next],{
              x:'100%',
              onComplete: () =>  {
                this.btnL.nativeElement.disabled = false;
                this.btnR.nativeElement.disabled = false;
              }
            },'<-.1')


        }
      },'< - .1')
  }






  ngOnInit(): void {
    this.current = 0;
    this.prev = this.current - 1;
    this.next = this.current + 1;


  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    let y = window.innerWidth||  document.body.clientWidth;

    if(y >= 1020){
      gsap.set(this.sliderItemsImg.nativeElement.children, {x:'100%'});
      gsap.set(this.sliderText.nativeElement.children, {autoAlpha: 0});

      gsap.set(this.sliderItemsImg.nativeElement.children[0], {x:'0%'});
      gsap.set(this.sliderItemsImg.nativeElement.children[this.sliderItemsImg.nativeElement.children.length - 1], {x:'-100%'});

      gsap.set(this.sliderText.nativeElement.children[0], {autoAlpha: 1});
    }
    this.gsapSrv.hideCmp([
      this.slideBox.nativeElement,
      this.sliderText.nativeElement.children,
      this.sliderItemsImg.nativeElement.children

    ])

    this.gsapSrv.fadeInCmp([
      this.slideBox.nativeElement,
      this.sliderText.nativeElement.children,
      this.sliderItemsImg.nativeElement.children
    ],this.slideBox)

  }

}
