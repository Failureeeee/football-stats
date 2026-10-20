import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComparatorComponent } from './player-comparator';

describe('PlayerComparator', () => {
  let component: PlayerComparatorComponent;
  let fixture: ComponentFixture<PlayerComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerComparatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerComparatorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
