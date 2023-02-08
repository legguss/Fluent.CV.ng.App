import {Component, Input} from '@angular/core'
import {Skill} from '../../models/Resume'
import { NgIf, NgForOf, NgClass } from '@angular/common';

@Component({
    selector: 'Skills',
    templateUrl: './skills.component.html',
    standalone: true,
    imports: [NgIf, NgForOf, NgClass]
})
export class SkillsComponent
{
   @Input()
   skills?: Skill[]
   @Input()
   header?: string
}
