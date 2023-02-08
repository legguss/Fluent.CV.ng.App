import {Component, Input} from '@angular/core'
import {Education} from '../../models/Resume'

@Component({
   selector: 'EducationSection',
   templateUrl: './education-section.component.html',
})
export class EducationSectionComponent
{
   @Input()
   educations?: Education[]
}
