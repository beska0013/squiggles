import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  blogList:IBlog[] = [
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
    {
      img:'../../assets/images/blogSponge.png',
      title: 'The Fiat Scam',
      content: 'How a flawed monetary system is the root of the real-world problems we face today.'
    },
  ]

  getBlogs = ():Observable<IBlog[]> => of(this.blogList)

}

export interface IBlog{
  img:string;
  title: string;
  content: string;
}
