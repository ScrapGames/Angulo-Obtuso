import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoComp } from './segundo-comp';

describe('SegundoComp', () => {
  let component: SegundoComp;
  let fixture: ComponentFixture<SegundoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
