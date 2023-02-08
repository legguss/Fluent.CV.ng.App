import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Resume} from '../../models/Resume'
import {ResumeLoaderService} from '../resume-loader.service'

@Component({
   selector: 'Resume',
   templateUrl: './resume.component.html',
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
