import {Component, Input} from '@angular/core'
import {Story} from '../../models/Resume'
import { NgIf, NgForOf } from '@angular/common';

@Component({
    selector: 'Story',
    templateUrl: './story.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf]
})
export class StoryComponent {
   
   @Input()
   story?: Story
}
