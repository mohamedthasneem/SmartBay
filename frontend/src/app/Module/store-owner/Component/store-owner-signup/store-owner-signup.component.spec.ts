import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOwnerSignupComponent } from './store-owner-signup.component';

describe('StoreOwnerSignupComponent', () => {
  let component: StoreOwnerSignupComponent;
  let fixture: ComponentFixture<StoreOwnerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreOwnerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreOwnerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
