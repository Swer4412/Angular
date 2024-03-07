import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtenteComponent } from './detail-utente.component';

describe('DetailUtenteComponent', () => {
  let component: DetailUtenteComponent;
  let fixture: ComponentFixture<DetailUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailUtenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
