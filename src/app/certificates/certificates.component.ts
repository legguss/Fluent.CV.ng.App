import {Component, Input} from '@angular/core'
import {Education} from '../../models/Resume'
import { NgIf, NgForOf } from '@angular/common';

@Component({
    selector: 'Certificates',
    templateUrl: './certificates.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgForOf]
})
export class CertificatesComponent
{
   @Input()
   certificates?: Education[]
}
