import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutzplanComponent } from './putzplan.component';

describe('PutzplanComponent', () => {
  let component: PutzplanComponent;
  let fixture: ComponentFixture<PutzplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutzplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutzplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
