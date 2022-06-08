import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

interface ICmp{
  logo: string,
  text: string[],
  imgMain:string,
  imgSec: string[],
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesComponent implements OnInit {

  constructor() { }


  sliderItems:ICmp[] = [
    {
      logo:'./assets/svg/companyIcons/gl_lamp.svg',
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
      imgMain:'./assets/img/compaies_cardOne/main.png',
      imgSec: [
        './assets/img/compaies_cardOne/secondaryOne.png',
        './assets/img/compaies_cardOne/secondaryTwo.png'
      ],

    },
    {
      logo:'./assets/svg/companyIcons/quailizeIcon.svg',
      text:[
        "I started Qualiize as a proprietary influencer marketing tool for Galaxy Lamps. There weren’t any products on the market that could accurately predict the performance of an influencer integration",
         "I wanted to create a product that would give brands the ability to make data-driven decisions when it came to their influencer marketing campaigns. The platform uses predictive analytics to rate the potential performance of an influencer based on various KPIs. We’ve been able to save thousands of dollars by identifying which influencers are most likely to generate a return on investment. If you’re looking for a tool that can help you run more successful and cost-effective influencer marketing, check us out."
      ],
      imgMain:'./assets/img/company_cardTwo/main.png',
      imgSec: [
        './assets/img/company_cardTwo/secondaryOne.png',
        './assets/img/company_cardTwo/secondaryTwo.png'
      ],

    },
    {
      logo:'./assets/svg/companyIcons/xclusiveIcon.svg',
      text:[
        "I started Xclusiv with 3 other co-founders in early 2021. Xclusiv is going to be a platform for creators to be able to monetize their content. We're building this because we believe that creators should be able to make a living off of their passion",
        "All too often, we see talented creators give up on their dreams because they can't make enough money to support themselves. With Xclusiv, we want to change that. We want to create a space where creators can not only make money but also connect with their fans and build a community. We are in the late stages of development and expect to launch our beta in Q3 of 2022."

      ],
      imgMain:'./assets/img/company_cardThree/main.png',
      imgSec: [
        './assets/img/company_cardThree/secondaryOne.png',
        './assets/img/company_cardThree/secondaryTwo.png'
      ],

    }
  ]

  sliderItemList:ICmp[] = [ this.sliderItems[0]];

  index:number = 0;

  sliderIncrement(){
    this.index++;
    if(this.index > this.sliderItems.length -1 )  this.index = 0;

    this.sliderItemList = [this.sliderItems[this.index]]
  }

  sliderDecrement(){
    this.index--;
    if(this.index < 0 )  this.index = this.sliderItems.length -1;

    this.sliderItemList = [this.sliderItems[this.index]];
    console.log(this.index);
  }

  sliderTrack(index: number, item: ICmp){
    return index
  }

  ngOnInit(): void {

  }

}
