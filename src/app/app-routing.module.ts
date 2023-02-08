import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ResumeComponent} from './resume/resume.component'

const routes: Routes = [
   {path: ':id', component: ResumeComponent},
   {path: '**/:id', redirectTo: '/:id'},
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule
{
}
