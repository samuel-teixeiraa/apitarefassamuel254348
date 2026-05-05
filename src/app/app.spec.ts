import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; 

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ], // Update here
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Update here
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});