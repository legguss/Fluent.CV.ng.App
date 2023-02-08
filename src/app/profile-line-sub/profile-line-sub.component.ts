import {Component, Input} from '@angular/core'

@Component({
   selector: 'ProfileLineSub',
   templateUrl: './profile-line-sub.component.html',
   styles: []
})
export class ProfileLineSubComponent
{
   @Input()
   line!: string
}
