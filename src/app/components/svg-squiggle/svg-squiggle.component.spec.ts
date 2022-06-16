import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSquiggleComponent } from './svg-squiggle.component';

describe('SvgSquiggleComponent', () => {
  let component: SvgSquiggleComponent;
  let fixture: ComponentFixture<SvgSquiggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSquiggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgSquiggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
