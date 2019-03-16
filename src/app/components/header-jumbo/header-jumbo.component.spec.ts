import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJumboComponent } from './header-jumbo.component';

describe('HeaderJumboComponent', () => {
  let component: HeaderJumboComponent;
  let fixture: ComponentFixture<HeaderJumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderJumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderJumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
