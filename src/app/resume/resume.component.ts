import {NgIf} from '@angular/common'
import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Resume} from '../../models/Resume'
import {CertificatesComponent} from '../certificates/certificates.component'
import {EducationSectionComponent} from '../education-section/education-section.component'
import {ExperienceComponent} from '../experience/experience.component'
import {HistoryListComponent} from '../history-list/history-list.component'
import {PersonalInfoComponent} from '../personal-info/personal-info.component'
import {ProjectsComponent} from '../projects/projects.component'
import {ResumeLoaderService} from '../resume-loader.service'
import {SkillsComponent} from '../skills/skills.component'
import {StatusComponent} from '../status/status.component'
import {StoryComponent} from '../story/story.component'

@Component({
   selector: 'Resume',
   templateUrl: './resume.component.html',
   imports: [
      CertificatesComponent,
      SkillsComponent,
      PersonalInfoComponent,
      StoryComponent,
      StatusComponent,
      ExperienceComponent,
      EducationSectionComponent,
      ProjectsComponent,
      HistoryListComponent,
      NgIf
   ],
   standalone: true
})
export class ResumeComponent
{
   cv!: Resume
   
   ngOnInit()
   {
      this.route.params.subscribe(async params =>
      {
         this.resumeLoader.loadResume(params['id'])
         .subscribe(resume => this.cv = resume)
      })
   }
   
   constructor(
      private route: ActivatedRoute,
      private resumeLoader: ResumeLoaderService
   )
   {
      
   }
   
}
