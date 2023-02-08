import {Component, Input} from '@angular/core'
import {HistoryItem} from '../../models/Resume'
import { HistorySectionComponent } from '../history-section/history-section.component';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'HistoryList',
    templateUrl: './history-list.component.html',
    styles: [],
    standalone: true,
    imports: [NgForOf, HistorySectionComponent]
})
export class HistoryListComponent {
   @Input()
   histories!: HistoryItem[]
}
