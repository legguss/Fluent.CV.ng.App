import {importProvidersFrom} from '@angular/core'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app/app-routes'
import {AppComponent} from './app/app.component'
import {HttpClientModule} from '@angular/common/http'
import {CommonModule} from '@angular/common'
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser'

bootstrapApplication(AppComponent, {
   providers: [
      
      importProvidersFrom(BrowserModule, CommonModule, HttpClientModule),
      provideRouter(appRoutes)
   ]
})
.catch(err => console.error(err))
