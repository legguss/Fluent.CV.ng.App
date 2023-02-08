import {Component, Input} from '@angular/core'

@Component({
    selector: 'ProfileLineSub',
    templateUrl: './profile-line-sub.component.html',
    styles: [],
    standalone: true
})
export class ProfileLineSubComponent
{
   @Input()
   line!: string
}
