import {Component, Input} from '@angular/core'
import {HistoryItem} from '../../models/Resume'

@Component({
  selector: 'HistoryList',
  templateUrl: './history-list.component.html',
  styles: [
  ]
})
export class HistoryListComponent {
   @Input()
   histories!: HistoryItem[]
}
