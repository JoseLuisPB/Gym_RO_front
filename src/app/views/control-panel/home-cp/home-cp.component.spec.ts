import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCpComponent } from './home-cp.component';

describe('HomeCpComponent', () => {
  let component: HomeCpComponent;
  let fixture: ComponentFixture<HomeCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
