import {ComponentFixture, TestBed} from '@angular/core/testing'
import {StatusRole} from '../../models/Resume'

import {ProfileLineComponent} from './profile-line.component'

describe('ProfileLineComponent', () =>
{
   let component: ProfileLineComponent
   let fixture: ComponentFixture<ProfileLineComponent>
   
   beforeEach(async () =>
   {
      await TestBed.configureTestingModule({
         imports: [ProfileLineComponent]
      })
      .compileComponents()
      
      fixture = TestBed.createComponent(ProfileLineComponent)
      component = fixture.componentInstance
      component.item = <StatusRole>{
         JustSummary: true,
         Summary: 'Summary',
         Details: ['detail 1']
      }
      fixture.detectChanges()
   })
   
   it('should create', () =>
   {
      expect(component).toBeTruthy()
   })
})
