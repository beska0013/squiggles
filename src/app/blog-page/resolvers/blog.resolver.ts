import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AppService} from "../../app.service";

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<boolean> {

  constructor(private appSrv: AppService) {
  }

  resolve(): Observable<any> {
    return this.appSrv.getBlogs()
  }
}
