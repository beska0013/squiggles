import { Injectable } from '@angular/core';
import {
  Router, Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<boolean> {

  constructor(private route:Router) {}
  resolve(): Observable<boolean> {
    if(this.route.getCurrentNavigation()?.extras?.state?.['data']){
      sessionStorage.setItem(
        'article',
        JSON.stringify(this.route.getCurrentNavigation()?.extras?.state?.['data'])
      )
    }

    return  of(this.route.getCurrentNavigation()?.extras?.state?.['data']) ;
  }
}
