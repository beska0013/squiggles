import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqAboutComponent } from './sq-about.component';

describe('SqAboutComponent', () => {
  let component: SqAboutComponent;
  let fixture: ComponentFixture<SqAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
