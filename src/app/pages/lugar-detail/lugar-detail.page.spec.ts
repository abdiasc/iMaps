import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LugarDetailPage } from './lugar-detail.page';

describe('LugarDetailPage', () => {
  let component: LugarDetailPage;
  let fixture: ComponentFixture<LugarDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
