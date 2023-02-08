import {Component, Input} from '@angular/core'
import {HistoryItem} from '../../models/Resume'

@Component({
   selector: 'HistorySection',
   templateUrl: './history-section.component.html',
   styles: []
})
export class HistorySectionComponent
{
   @Input()
   history!: HistoryItem
}
