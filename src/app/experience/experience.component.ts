import {Component, Input} from '@angular/core'
import {Experiences} from '../../models/Resume'

@Component({
   selector: 'Experience',
   templateUrl: './experience.component.html',
   styles: []
})
export class ExperienceComponent
{
   
   @Input()
   experiences?: Experiences
}
