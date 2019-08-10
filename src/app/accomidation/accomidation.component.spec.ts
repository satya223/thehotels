import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomidationComponent } from './accomidation.component';

describe('AccomidationComponent', () => {
  let component: AccomidationComponent;
  let fixture: ComponentFixture<AccomidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
