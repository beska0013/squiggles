import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnMob = false;

  // @Output() navState = new EventEmitter<boolean>()

  burgerBtnHandler = () => {
    this.btnMob = !this.btnMob;
    // this.navState.emit(this.btnMob);
  }

  navState = false
  constructor() { }

  ngOnInit(): void {
  }

}
