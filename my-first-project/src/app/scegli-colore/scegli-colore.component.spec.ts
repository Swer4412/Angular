import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScegliColoreComponent } from './scegli-colore.component';

describe('ScegliColoreComponent', () => {
  let component: ScegliColoreComponent;
  let fixture: ComponentFixture<ScegliColoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScegliColoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScegliColoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
