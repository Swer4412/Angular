import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PrenotaSpiaggiaComponent } from './prenota-spiaggia.component';

describe('PrenotaSpiaggiaComponent', () => {
  let component: PrenotaSpiaggiaComponent;
  let fixture: ComponentFixture<PrenotaSpiaggiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaSpiaggiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
