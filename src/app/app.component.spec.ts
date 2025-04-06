import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    /** declear variable with details */
const fixture = TestBed.createComponent(AppComponent);
    /** declear variable with details */
const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-practice' title`, () => {
    /** declear variable with details */
const fixture = TestBed.createComponent(AppComponent);
    /** declear variable with details */
const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-practice');
  });

  it('should render title', () => {
    /** declear variable with details */
const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    /** declear variable with details */
const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-practice');
  });
});
