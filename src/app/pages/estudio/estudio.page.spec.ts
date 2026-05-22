import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudioPage } from './estudio.page';

describe('EstudioPage', () => {
  let component: EstudioPage;
  let fixture: ComponentFixture<EstudioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
