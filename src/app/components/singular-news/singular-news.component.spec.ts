import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularNewsComponent } from './singular-news.component';

describe('SingularNewsComponent', () => {
  let component: SingularNewsComponent;
  let fixture: ComponentFixture<SingularNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularNewsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
