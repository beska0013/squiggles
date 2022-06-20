import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnMob = false;

  @Input() articalePg:any;



  burgerBtnHandler = () => {
    this.btnMob = !this.btnMob;
    // this.navState.emit(this.btnMob);
  }

  navState = false
  constructor() { }

  ngOnInit(): void {
    // console.log(this.articalePg);
  }

}
