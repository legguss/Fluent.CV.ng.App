import {Component, Input} from '@angular/core'
import {Skill} from '../../models/Resume'

@Component({
   selector: 'Skills',
   templateUrl: './skills.component.html',
})
export class SkillsComponent
{
   @Input()
   skills?: Skill[]
   @Input()
   header?: string
}
