import {Component, Input} from '@angular/core'
import {Education} from '../../models/Resume'
import { NgForOf } from '@angular/common';

@Component({
    selector: 'EducationSection',
    templateUrl: './education-section.component.html',
    standalone: true,
    imports: [NgForOf]
})
export class EducationSectionComponent
{
   @Input()
   educations?: Education[]
}
