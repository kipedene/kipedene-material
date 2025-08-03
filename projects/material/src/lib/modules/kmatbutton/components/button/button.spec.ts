import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmatButton } from './button';

describe('Button', () => {
  let component: KmatButton;
  let fixture: ComponentFixture<KmatButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmatButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmatButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
