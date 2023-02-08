import {Component, Input} from '@angular/core'
import {Personal} from '../../models/Resume'
import { NgIf } from '@angular/common';

@Component({
    selector: 'PersonalInfo',
    templateUrl: './personal-info.component.html',
    standalone: true,
    imports: [NgIf]
})
export class PersonalInfoComponent
{
   @Input()
   personal!: Personal
}
