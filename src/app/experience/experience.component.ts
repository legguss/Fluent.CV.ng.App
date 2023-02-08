import {Component, Input} from '@angular/core'
import {Experiences} from '../../models/Resume'
import { NgIf, NgForOf, NgClass } from '@angular/common';

@Component({
    selector: 'Experience',
    templateUrl: './experience.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf, NgClass]
})
export class ExperienceComponent
{
   
   @Input()
   experiences?: Experiences
}
