import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmatCard } from './card';

describe('Card', () => {
  let component: KmatCard;
  let fixture: ComponentFixture<KmatCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmatCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmatCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
