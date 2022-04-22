import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashDataComponent } from './hash-data.component';

describe('HashDataComponent', () => {
  let component: HashDataComponent;
  let fixture: ComponentFixture<HashDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
