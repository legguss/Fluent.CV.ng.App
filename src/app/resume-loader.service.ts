import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Resume} from '../models/Resume'

@Injectable({
   providedIn: 'root'
})
export class ResumeLoaderService
{
   
   constructor(private http: HttpClient)
   {
      
   }
   
   loadResume(id: string): Observable<Resume>
   {
      console.info('loading resume', id)
      return this.http.get<Resume>(`/api/cv/${id}`)
   }
   
}
