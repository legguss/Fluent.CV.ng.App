import {Component, Input} from '@angular/core'
import {Status} from '../../models/Resume'

@Component({
   selector: 'Status',
   templateUrl: './status.component.html',
   styles: []
})
export class StatusComponent
{
   @Input()
   statuses?: Status[]
}
