import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Personal} from '../../models/Resume'

import {PersonalInfoComponent} from './personal-info.component'

describe('PersonalInfoComponent', () =>
{
   let component: PersonalInfoComponent
   let fixture: ComponentFixture<PersonalInfoComponent>
   
   beforeEach(async () =>
   {
      await TestBed.configureTestingModule({
         imports: [PersonalInfoComponent]
      })
      .compileComponents()
      
      fixture = TestBed.createComponent(PersonalInfoComponent)
      component = fixture.componentInstance
      component.personal = <Personal>{
         FullName: 'John Doe',
      }
      fixture.detectChanges()
   })
   
   it('should create', () =>
   {
      expect(component).toBeTruthy()
   })
})
