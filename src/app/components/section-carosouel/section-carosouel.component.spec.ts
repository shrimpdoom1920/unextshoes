import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarosouelComponent } from './section-carosouel.component';

describe('SectionCarosouelComponent', () => {
  let component: SectionCarosouelComponent;
  let fixture: ComponentFixture<SectionCarosouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCarosouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarosouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
