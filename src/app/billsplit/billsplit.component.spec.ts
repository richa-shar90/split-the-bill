import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsplitComponent } from './billsplit.component';

describe('BillsplitComponent', () => {
  let component: BillsplitComponent;
  let fixture: ComponentFixture<BillsplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have one user atleast', async(()=>{
    expect(component.users.length).toEqual(2);
    
  }));



  

 
  
});
