import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenCardComponent } from './imagen-card.component';

describe('ImagenCardComponent', () => {
  let component: ImagenCardComponent;
  let fixture: ComponentFixture<ImagenCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenCardComponent]
    });
    fixture = TestBed.createComponent(ImagenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
