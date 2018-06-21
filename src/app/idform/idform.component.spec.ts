import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdformComponent } from './idform.component';

describe('IdformComponent', () => {
  let component: IdformComponent;
  let fixture: ComponentFixture<IdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
