import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addocart2Component } from './addocart2.component';

describe('Addocart2Component', () => {
  let component: Addocart2Component;
  let fixture: ComponentFixture<Addocart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addocart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addocart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
