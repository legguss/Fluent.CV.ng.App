import {Component, Input} from '@angular/core'
import {Project} from '../../models/Resume'

@Component({
    selector: 'Projects',
    templateUrl: './projects.component.html',
    styles: [],
    standalone: true
})
export class ProjectsComponent
{
   @Input()
   projects?: Project[]
}
