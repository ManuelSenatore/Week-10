import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiliInattiviComponent } from './profili-inattivi.component';

describe('ProfiliInattiviComponent', () => {
  let component: ProfiliInattiviComponent;
  let fixture: ComponentFixture<ProfiliInattiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiliInattiviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiliInattiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
