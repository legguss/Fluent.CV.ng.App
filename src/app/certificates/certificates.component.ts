import {Component, Input} from '@angular/core'
import {Education} from '../../models/Resume'

@Component({
   selector: 'Certificates',
   templateUrl: './certificates.component.html',
   styles: []
})
export class CertificatesComponent
{
   @Input()
   certificates?: Education[]
}
