import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicodeInfoComponent } from './picode-info.component';

describe('PicodeInfoComponent', () => {
  let component: PicodeInfoComponent;
  let fixture: ComponentFixture<PicodeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicodeInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
