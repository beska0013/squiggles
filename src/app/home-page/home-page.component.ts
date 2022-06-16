import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild('about') aboutCmp!: ElementRef
  @ViewChild('companies') companiesCmp!: ElementRef
  @ViewChild('blog') blogCmp!: ElementRef
  @ViewChild('contact') contactCmp!: ElementRef



  scrollTo(el: ElementRef){
    event?.preventDefault();
    el.nativeElement.scrollIntoView({behavior: 'smooth'})
  }
  navtState!:boolean;

  navtStateHandler(event: boolean){

    this.navtState = event
  }
  constructor() { }

  ngOnInit(): void {
  }

}
