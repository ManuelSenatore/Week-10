import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiliAttiviComponent } from './profili-attivi.component';

describe('ProfiliAttiviComponent', () => {
  let component: ProfiliAttiviComponent;
  let fixture: ComponentFixture<ProfiliAttiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiliAttiviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiliAttiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
