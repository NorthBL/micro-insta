import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphotoComponent } from './editphoto.component';

describe('EditphotoComponent', () => {
  let component: EditphotoComponent;
  let fixture: ComponentFixture<EditphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
