import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqSpongeComponent } from './sq-sponge.component';

describe('SqSpongeComponent', () => {
  let component: SqSpongeComponent;
  let fixture: ComponentFixture<SqSpongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqSpongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqSpongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
