import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { UserListComponent } from './user-list/user-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { HeaderInterceptor } from './core/interseptor/header.interceptor'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxPaginationModule } from 'ngx-pagination'
import { UserEditComponent } from './user-edit/user-edit.component'
import { GoogleMapComponent } from './google-map/google-map.component'
import { AgmCoreModule } from '@agm/core'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { DatepickerComponent } from './datepicker/datepicker.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { ThemeService } from './core/services/theme.service'
import { MultiselectComponent } from './multiselect/multiselect.component'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown'
import { TreeStructureComponent } from './tree-structure/tree-structure.component'
import { MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialLoginModule,
} from 'angularx-social-login'
import { ChartsModule } from 'ng2-charts'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '301514769861-3semh9017faoosb6015b9js87sbsgkto.apps.googleusercontent.com',
    ),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('654810455510289'),
  },
])
export function provideConfig() {
  return config
}
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    LoginComponent,
    LogoutComponent,
    UserEditComponent,
    GoogleMapComponent,
    DatepickerComponent,
    ImageUploadComponent,
    MultiselectComponent,
    TreeStructureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhUv9P41WchUVFV8WrENfq9h3AzGC7nac',
      libraries: ['places'],
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    NgbModule,
    AngularMultiSelectModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    SocialLoginModule,
    ChartsModule,
    Ng2SearchPipeModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    ThemeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
