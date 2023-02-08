import {HttpClientTestingModule} from '@angular/common/http/testing'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'

import {ResumeComponent} from './resume.component'

describe('ResumeComponent', () =>
{
   let component: ResumeComponent
   let fixture: ComponentFixture<ResumeComponent>
   
   beforeEach(async () =>
   {
      await TestBed.configureTestingModule({
         imports: [ResumeComponent, RouterTestingModule, HttpClientTestingModule]
      })
      .compileComponents()
      
      fixture = TestBed.createComponent(ResumeComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })
   
   it('should create', () =>
   {
      expect(component).toBeTruthy()
   })
})
