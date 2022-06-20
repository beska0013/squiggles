import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GsapServiceService} from "../gsap-service/gsap-service.service";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor(private srvGsap: GsapServiceService) { }

  $articalePg = this.srvGsap.articalePage()





  ngOnInit(): void {
    // console.log(this.$blogData);
  }

}
