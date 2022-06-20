import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Subscription} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy,AfterViewInit {

  @ViewChild('about') aboutCmp!: ElementRef
  @ViewChild('companies') companiesCmp!: ElementRef

  @ViewChild('contact') contactCmp!: ElementRef

 $cmpRoute!: Subscription;

  navtState!:boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  scrollTo(el: ElementRef){
    event?.preventDefault();
    el.nativeElement.scrollIntoView({behavior: 'smooth'})
  }


  navtStateHandler(event: boolean){
    this.navtState = event
  }

  navigateToCmp(cmp: string){

    switch (cmp){
      case 'aboutCmp' :
        return this.scrollTo(this.aboutCmp);
      case 'companiesCmp' :
        return this.scrollTo(this.companiesCmp)
      // case 'blogCmp' :
      //   return this.scrollTo(this.blogCmp)
      case 'contactCmp' :
        return this.scrollTo(this.contactCmp)

    }
  }


  ngOnInit(): void {}







  ngAfterViewInit(): void {
    this.$cmpRoute = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(path => {
        if(path.cmp) this.navigateToCmp(path.cmp)
      })
  }

  ngOnDestroy(): void {
    this.$cmpRoute.unsubscribe();
  }
}
