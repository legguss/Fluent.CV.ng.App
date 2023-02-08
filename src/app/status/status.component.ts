import {Component, Input} from '@angular/core'
import {Status} from '../../models/Resume'
import {ProfileLineComponent} from '../profile-line/profile-line.component'
import {NgForOf} from '@angular/common'

@Component({
   selector: 'Status',
   templateUrl: './status.component.html',
   styles: [],
   standalone: true,
   imports: [NgForOf, ProfileLineComponent]
})
export class StatusComponent
{
   @Input()
   statuses?: Status[]
}
