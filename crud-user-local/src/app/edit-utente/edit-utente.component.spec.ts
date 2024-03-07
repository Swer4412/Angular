import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtenteComponent } from './edit-utente.component';

describe('EditUtenteComponent', () => {
  let component: EditUtenteComponent;
  let fixture: ComponentFixture<EditUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUtenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
