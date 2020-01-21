import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesetupComponent } from './gamesetup.component';

describe('GamesetupComponent', () => {
  let component: GamesetupComponent;
  let fixture: ComponentFixture<GamesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
