import {Component, Input} from '@angular/core'
import {StatusRole} from '../../models/Resume'

@Component({
   selector: 'ProfileLine',
   templateUrl: './profile-line.component.html',
   styles: []
})
export class ProfileLineComponent
{
   
   @Input()
   item!: StatusRole
}
