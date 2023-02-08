import {Component, Input} from '@angular/core'
import {StatusRole} from '../../models/Resume'
import { ProfileLineSubComponent } from '../profile-line-sub/profile-line-sub.component';
import { NgIf, NgForOf } from '@angular/common';

@Component({
    selector: 'ProfileLine',
    templateUrl: './profile-line.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf, ProfileLineSubComponent]
})
export class ProfileLineComponent
{
   
   @Input()
   item!: StatusRole
}
