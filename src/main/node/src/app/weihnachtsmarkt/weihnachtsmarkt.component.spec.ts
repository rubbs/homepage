import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeihnachtsmarktComponent } from './weihnachtsmarkt.component';

describe('WeihnachtsmarktComponent', () => {
  let component: WeihnachtsmarktComponent;
  let fixture: ComponentFixture<WeihnachtsmarktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeihnachtsmarktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeihnachtsmarktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
