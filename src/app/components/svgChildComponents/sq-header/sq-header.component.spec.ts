import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqHeaderComponent } from './sq-header.component';

describe('SqHeaderComponent', () => {
  let component: SqHeaderComponent;
  let fixture: ComponentFixture<SqHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
