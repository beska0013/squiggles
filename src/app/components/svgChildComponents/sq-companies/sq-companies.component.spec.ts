import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqCompaniesComponent } from './sq-companies.component';

describe('SqCompaniesComponent', () => {
  let component: SqCompaniesComponent;
  let fixture: ComponentFixture<SqCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
