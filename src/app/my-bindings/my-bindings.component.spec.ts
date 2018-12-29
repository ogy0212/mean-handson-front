import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBindingsComponent } from './my-bindings.component';

describe('MyBindingsComponent', () => {
  let component: MyBindingsComponent;
  let fixture: ComponentFixture<MyBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
