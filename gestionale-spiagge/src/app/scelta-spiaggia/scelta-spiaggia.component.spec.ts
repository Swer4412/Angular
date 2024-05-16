import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaSpiaggiaComponent } from './scelta-spiaggia.component';

describe('SceltaSpiaggiaComponent', () => {
  let component: SceltaSpiaggiaComponent;
  let fixture: ComponentFixture<SceltaSpiaggiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceltaSpiaggiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SceltaSpiaggiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
