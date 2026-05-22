import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiestaPage } from './siesta.page';

describe('SiestaPage', () => {
  let component: SiestaPage;
  let fixture: ComponentFixture<SiestaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SiestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
