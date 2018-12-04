import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsudComponent } from './testsud.component';


describe('TestsudComponent', () => {
  let component: TestsudComponent;
  let fixture: ComponentFixture<TestsudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
