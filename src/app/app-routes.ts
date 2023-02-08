import {Routes} from '@angular/router'
import {ResumeComponent} from './resume/resume.component'

export const appRoutes: Routes = [
   {path: ':id', component: ResumeComponent},
   {path: '**/:id', redirectTo: '/:id'},
]
