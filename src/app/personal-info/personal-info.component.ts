import {Component, Input} from '@angular/core'
import {Personal} from '../../models/Resume'

@Component({
   selector: 'PersonalInfo',
   templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent
{
   @Input()
   personal!: Personal
}
