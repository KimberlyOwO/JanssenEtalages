import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllEtalagePage } from './tab4.page';

describe('Tab4Page', () => {
  let component: AllEtalagePage;
  let fixture: ComponentFixture<AllEtalagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllEtalagePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllEtalagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
