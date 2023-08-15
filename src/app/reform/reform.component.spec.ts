import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformComponent } from './reform.component';

describe('ReformComponent', () => {
  let component: ReformComponent;
  let fixture: ComponentFixture<ReformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
