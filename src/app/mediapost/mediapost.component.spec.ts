import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapostComponent } from './mediapost.component';

describe('MediapostComponent', () => {
  let component: MediapostComponent;
  let fixture: ComponentFixture<MediapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediapostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
