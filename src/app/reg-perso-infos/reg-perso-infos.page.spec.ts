import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPersoInfosPage } from './reg-perso-infos.page';

describe('RegPersoInfosPage', () => {
  let component: RegPersoInfosPage;
  let fixture: ComponentFixture<RegPersoInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPersoInfosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPersoInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
