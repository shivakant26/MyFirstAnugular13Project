import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplictionComponent } from './appliction.component';

describe('ApplictionComponent', () => {
  let component: ApplictionComponent;
  let fixture: ComponentFixture<ApplictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
