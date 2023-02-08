import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ResumeComponent} from './resume/resume.component'
import {SkillsComponent} from './skills/skills.component'
import {PersonalInfoComponent} from './personal-info/personal-info.component'
import {EducationSectionComponent} from './education-section/education-section.component'
import {CertificatesComponent} from './certificates/certificates.component'
import {StoryComponent} from './story/story.component'
import {StatusComponent} from './status/status.component'
import {ExperienceComponent} from './experience/experience.component'
import {HistoryListComponent} from './history-list/history-list.component'
import {ProjectsComponent} from './projects/projects.component'
import {ProfileLineComponent} from './profile-line/profile-line.component'
import {ProfileLineSubComponent} from './profile-line-sub/profile-line-sub.component'
import {HistorySectionComponent} from './history-section/history-section.component'

@NgModule({
   declarations: [
      AppComponent,
      ResumeComponent,
      SkillsComponent,
      PersonalInfoComponent,
      EducationSectionComponent,
      CertificatesComponent,
      StoryComponent,
      StatusComponent,
      ExperienceComponent,
      HistoryListComponent,
      ProjectsComponent,
      ProfileLineComponent,
      ProfileLineSubComponent,
      HistorySectionComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      AppRoutingModule,
      
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule
{
}
