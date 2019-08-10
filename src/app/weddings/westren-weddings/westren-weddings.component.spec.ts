import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestrenWeddingsComponent } from './westren-weddings.component';

describe('WestrenWeddingsComponent', () => {
  let component: WestrenWeddingsComponent;
  let fixture: ComponentFixture<WestrenWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestrenWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestrenWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
