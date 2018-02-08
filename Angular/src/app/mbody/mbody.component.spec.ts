import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbodyComponent } from './mbody.component';

describe('MbodyComponent', () => {
  let component: MbodyComponent;
  let fixture: ComponentFixture<MbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
