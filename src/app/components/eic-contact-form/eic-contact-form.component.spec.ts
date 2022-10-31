import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EicContactFormComponent } from './eic-contact-form.component';

describe('EicContactFormComponent', () => {
  let component: EicContactFormComponent;
  let fixture: ComponentFixture<EicContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EicContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EicContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
