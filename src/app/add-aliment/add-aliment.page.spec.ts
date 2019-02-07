import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlimentPage } from './add-aliment.page';

describe('AddAlimentPage', () => {
  let component: AddAlimentPage;
  let fixture: ComponentFixture<AddAlimentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlimentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlimentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
