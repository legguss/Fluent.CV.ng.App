import {Component, Input} from '@angular/core'
import {HistoryItem} from '../../models/Resume'
import { NgIf, NgForOf, NgClass } from '@angular/common';

@Component({
    selector: 'HistorySection',
    templateUrl: './history-section.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf, NgClass]
})
export class HistorySectionComponent
{
   @Input()
   history!: HistoryItem
}
