import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigpageComponent } from './configpage.component';

describe('ConfigpageComponent', () => {
  let component: ConfigpageComponent;
  let fixture: ComponentFixture<ConfigpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
