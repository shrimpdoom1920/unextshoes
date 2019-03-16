import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShoesComponent } from './section-shoes.component';

describe('SectionShoesComponent', () => {
  let component: SectionShoesComponent;
  let fixture: ComponentFixture<SectionShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
