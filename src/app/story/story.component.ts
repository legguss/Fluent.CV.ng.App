import {Component, Input} from '@angular/core'
import {Story} from '../../models/Resume'

@Component({
  selector: 'Story',
  templateUrl: './story.component.html',
  styles: [
  ]
})
export class StoryComponent {
   
   @Input()
   story?: Story
}
