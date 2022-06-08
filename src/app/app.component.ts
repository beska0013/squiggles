import {Component, ElementRef,  ViewChild,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'squiggles';

  constructor() {}

  @ViewChild('about') aboutCmp!: ElementRef
  @ViewChild('companies') companiesCmp!: ElementRef
  @ViewChild('blog') blogCmp!: ElementRef
  @ViewChild('contact') contactCmp!: ElementRef



  scrollTo(el: ElementRef){
    event?.preventDefault();
    el.nativeElement.scrollIntoView({behavior: 'smooth'})
  }

}
